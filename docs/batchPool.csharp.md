# `azurerm_batch_pool`

Refer to the Terraform Registory for docs: [`azurerm_batch_pool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool).

# `batchPool` Submodule <a name="`batchPool` Submodule" id="@cdktf/provider-azurerm.batchPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchPool <a name="BatchPool" id="@cdktf/provider-azurerm.batchPool.BatchPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool azurerm_batch_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPool(Construct Scope, string Id, BatchPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig">BatchPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.batchPool.BatchPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig">BatchPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale">PutAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration">PutContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks">PutDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption">PutDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale">PutFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putMount">PutMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement">PutNodePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask">PutStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference">PutStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy">PutTaskSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts">PutUserAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.putWindows">PutWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale">ResetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration">ResetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks">ResetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions">ResetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale">ResetFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication">ResetInterNodeCommunication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode">ResetMaxTasksPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement">ResetNodePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement">ResetOsDiskPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask">ResetStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation">ResetStopPendingResizeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy">ResetTaskSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts">ResetUserAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows">ResetWindows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.batchPool.BatchPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoScale` <a name="PutAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale"></a>

```csharp
private void PutAutoScale(BatchPoolAutoScale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putAutoScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate"></a>

```csharp
private void PutCertificate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putCertificate.parameter.value"></a>

- *Type:* object

---

##### `PutContainerConfiguration` <a name="PutContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration"></a>

```csharp
private void PutContainerConfiguration(BatchPoolContainerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---

##### `PutDataDisks` <a name="PutDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks"></a>

```csharp
private void PutDataDisks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDataDisks.parameter.value"></a>

- *Type:* object

---

##### `PutDiskEncryption` <a name="PutDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption"></a>

```csharp
private void PutDiskEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putDiskEncryption.parameter.value"></a>

- *Type:* object

---

##### `PutExtensions` <a name="PutExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions"></a>

```csharp
private void PutExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putExtensions.parameter.value"></a>

- *Type:* object

---

##### `PutFixedScale` <a name="PutFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale"></a>

```csharp
private void PutFixedScale(BatchPoolFixedScale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putFixedScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity"></a>

```csharp
private void PutIdentity(BatchPoolIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---

##### `PutMount` <a name="PutMount" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount"></a>

```csharp
private void PutMount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putMount.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(BatchPoolNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---

##### `PutNodePlacement` <a name="PutNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement"></a>

```csharp
private void PutNodePlacement(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putNodePlacement.parameter.value"></a>

- *Type:* object

---

##### `PutStartTask` <a name="PutStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask"></a>

```csharp
private void PutStartTask(BatchPoolStartTask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStartTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---

##### `PutStorageImageReference` <a name="PutStorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference"></a>

```csharp
private void PutStorageImageReference(BatchPoolStorageImageReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putStorageImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---

##### `PutTaskSchedulingPolicy` <a name="PutTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy"></a>

```csharp
private void PutTaskSchedulingPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTaskSchedulingPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts"></a>

```csharp
private void PutTimeouts(BatchPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

---

##### `PutUserAccounts` <a name="PutUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts"></a>

```csharp
private void PutUserAccounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putUserAccounts.parameter.value"></a>

- *Type:* object

---

##### `PutWindows` <a name="PutWindows" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows"></a>

```csharp
private void PutWindows(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPool.putWindows.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoScale` <a name="ResetAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetAutoScale"></a>

```csharp
private void ResetAutoScale()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetContainerConfiguration` <a name="ResetContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetContainerConfiguration"></a>

```csharp
private void ResetContainerConfiguration()
```

##### `ResetDataDisks` <a name="ResetDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDataDisks"></a>

```csharp
private void ResetDataDisks()
```

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDiskEncryption"></a>

```csharp
private void ResetDiskEncryption()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExtensions` <a name="ResetExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetExtensions"></a>

```csharp
private void ResetExtensions()
```

##### `ResetFixedScale` <a name="ResetFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetFixedScale"></a>

```csharp
private void ResetFixedScale()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInterNodeCommunication` <a name="ResetInterNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetInterNodeCommunication"></a>

```csharp
private void ResetInterNodeCommunication()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetMaxTasksPerNode` <a name="ResetMaxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMaxTasksPerNode"></a>

```csharp
private void ResetMaxTasksPerNode()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMount` <a name="ResetMount" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetMount"></a>

```csharp
private void ResetMount()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetNodePlacement` <a name="ResetNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetNodePlacement"></a>

```csharp
private void ResetNodePlacement()
```

##### `ResetOsDiskPlacement` <a name="ResetOsDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetOsDiskPlacement"></a>

```csharp
private void ResetOsDiskPlacement()
```

##### `ResetStartTask` <a name="ResetStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStartTask"></a>

```csharp
private void ResetStartTask()
```

##### `ResetStopPendingResizeOperation` <a name="ResetStopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetStopPendingResizeOperation"></a>

```csharp
private void ResetStopPendingResizeOperation()
```

##### `ResetTaskSchedulingPolicy` <a name="ResetTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTaskSchedulingPolicy"></a>

```csharp
private void ResetTaskSchedulingPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserAccounts` <a name="ResetUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetUserAccounts"></a>

```csharp
private void ResetUserAccounts()
```

##### `ResetWindows` <a name="ResetWindows" id="@cdktf/provider-azurerm.batchPool.BatchPool.resetWindows"></a>

```csharp
private void ResetWindows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BatchPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.batchPool.BatchPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BatchPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BatchPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.batchPool.BatchPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale">AutoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks">DataDisks</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption">DiskEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions">Extensions</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale">FixedScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mount">Mount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement">NodePlacement</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask">StartTask</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference">StorageImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy">TaskSchedulingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts">UserAccounts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windows">Windows</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput">AutoScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput">ContainerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput">DataDisksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput">ExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput">FixedScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput">InterNodeCommunicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput">MaxTasksPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput">MountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput">NodeAgentSkuIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput">NodePlacementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput">OsDiskPlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput">StartTaskInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput">StopPendingResizeOperationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput">StorageImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput">TaskSchedulingPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput">UserAccountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput">WindowsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication">InterNodeCommunication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode">MaxTasksPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId">NodeAgentSkuId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement">OsDiskPlacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation">StopPendingResizeOperation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoScale`<sup>Required</sup> <a name="AutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScale"></a>

```csharp
public BatchPoolAutoScaleOutputReference AutoScale { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference">BatchPoolAutoScaleOutputReference</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificate"></a>

```csharp
public BatchPoolCertificateList Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList">BatchPoolCertificateList</a>

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfiguration"></a>

```csharp
public BatchPoolContainerConfigurationOutputReference ContainerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference">BatchPoolContainerConfigurationOutputReference</a>

---

##### `DataDisks`<sup>Required</sup> <a name="DataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisks"></a>

```csharp
public BatchPoolDataDisksList DataDisks { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList">BatchPoolDataDisksList</a>

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryption"></a>

```csharp
public BatchPoolDiskEncryptionList DiskEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList">BatchPoolDiskEncryptionList</a>

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensions"></a>

```csharp
public BatchPoolExtensionsList Extensions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList">BatchPoolExtensionsList</a>

---

##### `FixedScale`<sup>Required</sup> <a name="FixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScale"></a>

```csharp
public BatchPoolFixedScaleOutputReference FixedScale { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference">BatchPoolFixedScaleOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identity"></a>

```csharp
public BatchPoolIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference">BatchPoolIdentityOutputReference</a>

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mount"></a>

```csharp
public BatchPoolMountList Mount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList">BatchPoolMountList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfiguration"></a>

```csharp
public BatchPoolNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference">BatchPoolNetworkConfigurationOutputReference</a>

---

##### `NodePlacement`<sup>Required</sup> <a name="NodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacement"></a>

```csharp
public BatchPoolNodePlacementList NodePlacement { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList">BatchPoolNodePlacementList</a>

---

##### `StartTask`<sup>Required</sup> <a name="StartTask" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTask"></a>

```csharp
public BatchPoolStartTaskOutputReference StartTask { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference">BatchPoolStartTaskOutputReference</a>

---

##### `StorageImageReference`<sup>Required</sup> <a name="StorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReference"></a>

```csharp
public BatchPoolStorageImageReferenceOutputReference StorageImageReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference">BatchPoolStorageImageReferenceOutputReference</a>

---

##### `TaskSchedulingPolicy`<sup>Required</sup> <a name="TaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicy"></a>

```csharp
public BatchPoolTaskSchedulingPolicyList TaskSchedulingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList">BatchPoolTaskSchedulingPolicyList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeouts"></a>

```csharp
public BatchPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference">BatchPoolTimeoutsOutputReference</a>

---

##### `UserAccounts`<sup>Required</sup> <a name="UserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccounts"></a>

```csharp
public BatchPoolUserAccountsList UserAccounts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList">BatchPoolUserAccountsList</a>

---

##### `Windows`<sup>Required</sup> <a name="Windows" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windows"></a>

```csharp
public BatchPoolWindowsList Windows { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList">BatchPoolWindowsList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AutoScaleInput`<sup>Optional</sup> <a name="AutoScaleInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.autoScaleInput"></a>

```csharp
public BatchPoolAutoScale AutoScaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `ContainerConfigurationInput`<sup>Optional</sup> <a name="ContainerConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.containerConfigurationInput"></a>

```csharp
public BatchPoolContainerConfiguration ContainerConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---

##### `DataDisksInput`<sup>Optional</sup> <a name="DataDisksInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.dataDisksInput"></a>

```csharp
public object DataDisksInput { get; }
```

- *Type:* object

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.diskEncryptionInput"></a>

```csharp
public object DiskEncryptionInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.extensionsInput"></a>

```csharp
public object ExtensionsInput { get; }
```

- *Type:* object

---

##### `FixedScaleInput`<sup>Optional</sup> <a name="FixedScaleInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.fixedScaleInput"></a>

```csharp
public BatchPoolFixedScale FixedScaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.identityInput"></a>

```csharp
public BatchPoolIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterNodeCommunicationInput`<sup>Optional</sup> <a name="InterNodeCommunicationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunicationInput"></a>

```csharp
public string InterNodeCommunicationInput { get; }
```

- *Type:* string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `MaxTasksPerNodeInput`<sup>Optional</sup> <a name="MaxTasksPerNodeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNodeInput"></a>

```csharp
public double MaxTasksPerNodeInput { get; }
```

- *Type:* double

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.mountInput"></a>

```csharp
public object MountInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.networkConfigurationInput"></a>

```csharp
public BatchPoolNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---

##### `NodeAgentSkuIdInput`<sup>Optional</sup> <a name="NodeAgentSkuIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuIdInput"></a>

```csharp
public string NodeAgentSkuIdInput { get; }
```

- *Type:* string

---

##### `NodePlacementInput`<sup>Optional</sup> <a name="NodePlacementInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodePlacementInput"></a>

```csharp
public object NodePlacementInput { get; }
```

- *Type:* object

---

##### `OsDiskPlacementInput`<sup>Optional</sup> <a name="OsDiskPlacementInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacementInput"></a>

```csharp
public string OsDiskPlacementInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StartTaskInput`<sup>Optional</sup> <a name="StartTaskInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.startTaskInput"></a>

```csharp
public BatchPoolStartTask StartTaskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---

##### `StopPendingResizeOperationInput`<sup>Optional</sup> <a name="StopPendingResizeOperationInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperationInput"></a>

```csharp
public object StopPendingResizeOperationInput { get; }
```

- *Type:* object

---

##### `StorageImageReferenceInput`<sup>Optional</sup> <a name="StorageImageReferenceInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.storageImageReferenceInput"></a>

```csharp
public BatchPoolStorageImageReference StorageImageReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---

##### `TaskSchedulingPolicyInput`<sup>Optional</sup> <a name="TaskSchedulingPolicyInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.taskSchedulingPolicyInput"></a>

```csharp
public object TaskSchedulingPolicyInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserAccountsInput`<sup>Optional</sup> <a name="UserAccountsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.userAccountsInput"></a>

```csharp
public object UserAccountsInput { get; }
```

- *Type:* object

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `WindowsInput`<sup>Optional</sup> <a name="WindowsInput" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.windowsInput"></a>

```csharp
public object WindowsInput { get; }
```

- *Type:* object

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterNodeCommunication`<sup>Required</sup> <a name="InterNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.interNodeCommunication"></a>

```csharp
public string InterNodeCommunication { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `MaxTasksPerNode`<sup>Required</sup> <a name="MaxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.maxTasksPerNode"></a>

```csharp
public double MaxTasksPerNode { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeAgentSkuId`<sup>Required</sup> <a name="NodeAgentSkuId" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.nodeAgentSkuId"></a>

```csharp
public string NodeAgentSkuId { get; }
```

- *Type:* string

---

##### `OsDiskPlacement`<sup>Required</sup> <a name="OsDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.osDiskPlacement"></a>

```csharp
public string OsDiskPlacement { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StopPendingResizeOperation`<sup>Required</sup> <a name="StopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.stopPendingResizeOperation"></a>

```csharp
public object StopPendingResizeOperation { get; }
```

- *Type:* object

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.batchPool.BatchPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchPoolAutoScale <a name="BatchPoolAutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolAutoScale {
    string Formula,
    string EvaluationInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula">Formula</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#formula BatchPool#formula}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval">EvaluationInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}. |

---

##### `Formula`<sup>Required</sup> <a name="Formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.formula"></a>

```csharp
public string Formula { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#formula BatchPool#formula}.

---

##### `EvaluationInterval`<sup>Optional</sup> <a name="EvaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale.property.evaluationInterval"></a>

```csharp
public string EvaluationInterval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}.

---

### BatchPoolCertificate <a name="BatchPoolCertificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolCertificate {
    string Id,
    string StoreLocation,
    string StoreName = null,
    string[] Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation">StoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#store_location BatchPool#store_location}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName">StoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#store_name BatchPool#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility">Visibility</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#visibility BatchPool#visibility}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StoreLocation`<sup>Required</sup> <a name="StoreLocation" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeLocation"></a>

```csharp
public string StoreLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#store_location BatchPool#store_location}.

---

##### `StoreName`<sup>Optional</sup> <a name="StoreName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.storeName"></a>

```csharp
public string StoreName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#store_name BatchPool#store_name}.

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificate.property.visibility"></a>

```csharp
public string[] Visibility { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#visibility BatchPool#visibility}.

---

### BatchPoolConfig <a name="BatchPoolConfig" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string Name,
    string NodeAgentSkuId,
    string ResourceGroupName,
    BatchPoolStorageImageReference StorageImageReference,
    string VmSize,
    BatchPoolAutoScale AutoScale = null,
    object Certificate = null,
    BatchPoolContainerConfiguration ContainerConfiguration = null,
    object DataDisks = null,
    object DiskEncryption = null,
    string DisplayName = null,
    object Extensions = null,
    BatchPoolFixedScale FixedScale = null,
    string Id = null,
    BatchPoolIdentity Identity = null,
    string InterNodeCommunication = null,
    string LicenseType = null,
    double MaxTasksPerNode = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    object Mount = null,
    BatchPoolNetworkConfiguration NetworkConfiguration = null,
    object NodePlacement = null,
    string OsDiskPlacement = null,
    BatchPoolStartTask StartTask = null,
    object StopPendingResizeOperation = null,
    object TaskSchedulingPolicy = null,
    BatchPoolTimeouts Timeouts = null,
    object UserAccounts = null,
    object Windows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId">NodeAgentSkuId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference">StorageImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | storage_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale">AutoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate">Certificate</a></code> | <code>object</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks">DataDisks</a></code> | <code>object</code> | data_disks block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption">DiskEncryption</a></code> | <code>object</code> | disk_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#display_name BatchPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions">Extensions</a></code> | <code>object</code> | extensions block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale">FixedScale</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | fixed_scale block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication">InterNodeCommunication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType">LicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#license_type BatchPool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode">MaxTasksPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#metadata BatchPool#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount">Mount</a></code> | <code>object</code> | mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement">NodePlacement</a></code> | <code>object</code> | node_placement block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement">OsDiskPlacement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask">StartTask</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | start_task block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation">StopPendingResizeOperation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy">TaskSchedulingPolicy</a></code> | <code>object</code> | task_scheduling_policy block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts">UserAccounts</a></code> | <code>object</code> | user_accounts block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows">Windows</a></code> | <code>object</code> | windows block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `NodeAgentSkuId`<sup>Required</sup> <a name="NodeAgentSkuId" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodeAgentSkuId"></a>

```csharp
public string NodeAgentSkuId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}.

---

##### `StorageImageReference`<sup>Required</sup> <a name="StorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.storageImageReference"></a>

```csharp
public BatchPoolStorageImageReference StorageImageReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

storage_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#storage_image_reference BatchPool#storage_image_reference}

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}.

---

##### `AutoScale`<sup>Optional</sup> <a name="AutoScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.autoScale"></a>

```csharp
public BatchPoolAutoScale AutoScale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#auto_scale BatchPool#auto_scale}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#certificate BatchPool#certificate}

---

##### `ContainerConfiguration`<sup>Optional</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.containerConfiguration"></a>

```csharp
public BatchPoolContainerConfiguration ContainerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container_configuration BatchPool#container_configuration}

---

##### `DataDisks`<sup>Optional</sup> <a name="DataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.dataDisks"></a>

```csharp
public object DataDisks { get; set; }
```

- *Type:* object

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#data_disks BatchPool#data_disks}

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.diskEncryption"></a>

```csharp
public object DiskEncryption { get; set; }
```

- *Type:* object

disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#disk_encryption BatchPool#disk_encryption}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#display_name BatchPool#display_name}.

---

##### `Extensions`<sup>Optional</sup> <a name="Extensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.extensions"></a>

```csharp
public object Extensions { get; set; }
```

- *Type:* object

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#extensions BatchPool#extensions}

---

##### `FixedScale`<sup>Optional</sup> <a name="FixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.fixedScale"></a>

```csharp
public BatchPoolFixedScale FixedScale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

fixed_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#fixed_scale BatchPool#fixed_scale}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.identity"></a>

```csharp
public BatchPoolIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#identity BatchPool#identity}

---

##### `InterNodeCommunication`<sup>Optional</sup> <a name="InterNodeCommunication" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.interNodeCommunication"></a>

```csharp
public string InterNodeCommunication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#license_type BatchPool#license_type}.

---

##### `MaxTasksPerNode`<sup>Optional</sup> <a name="MaxTasksPerNode" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.maxTasksPerNode"></a>

```csharp
public double MaxTasksPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#metadata BatchPool#metadata}.

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.mount"></a>

```csharp
public object Mount { get; set; }
```

- *Type:* object

mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#mount BatchPool#mount}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.networkConfiguration"></a>

```csharp
public BatchPoolNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#network_configuration BatchPool#network_configuration}

---

##### `NodePlacement`<sup>Optional</sup> <a name="NodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.nodePlacement"></a>

```csharp
public object NodePlacement { get; set; }
```

- *Type:* object

node_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#node_placement BatchPool#node_placement}

---

##### `OsDiskPlacement`<sup>Optional</sup> <a name="OsDiskPlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.osDiskPlacement"></a>

```csharp
public string OsDiskPlacement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}.

---

##### `StartTask`<sup>Optional</sup> <a name="StartTask" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.startTask"></a>

```csharp
public BatchPoolStartTask StartTask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

start_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#start_task BatchPool#start_task}

---

##### `StopPendingResizeOperation`<sup>Optional</sup> <a name="StopPendingResizeOperation" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.stopPendingResizeOperation"></a>

```csharp
public object StopPendingResizeOperation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}.

---

##### `TaskSchedulingPolicy`<sup>Optional</sup> <a name="TaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.taskSchedulingPolicy"></a>

```csharp
public object TaskSchedulingPolicy { get; set; }
```

- *Type:* object

task_scheduling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#task_scheduling_policy BatchPool#task_scheduling_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.timeouts"></a>

```csharp
public BatchPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts">BatchPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#timeouts BatchPool#timeouts}

---

##### `UserAccounts`<sup>Optional</sup> <a name="UserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.userAccounts"></a>

```csharp
public object UserAccounts { get; set; }
```

- *Type:* object

user_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_accounts BatchPool#user_accounts}

---

##### `Windows`<sup>Optional</sup> <a name="Windows" id="@cdktf/provider-azurerm.batchPool.BatchPoolConfig.property.windows"></a>

```csharp
public object Windows { get; set; }
```

- *Type:* object

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#windows BatchPool#windows}

---

### BatchPoolContainerConfiguration <a name="BatchPoolContainerConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolContainerConfiguration {
    string[] ContainerImageNames = null,
    object ContainerRegistries = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames">ContainerImageNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries">ContainerRegistries</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `ContainerImageNames`<sup>Optional</sup> <a name="ContainerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerImageNames"></a>

```csharp
public string[] ContainerImageNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}.

---

##### `ContainerRegistries`<sup>Optional</sup> <a name="ContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.containerRegistries"></a>

```csharp
public object ContainerRegistries { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolContainerConfigurationContainerRegistries <a name="BatchPoolContainerConfigurationContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolContainerConfigurationContainerRegistries {
    string Password = null,
    string RegistryServer = null,
    string UserAssignedIdentityId = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer">RegistryServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `RegistryServer`<sup>Optional</sup> <a name="RegistryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.registryServer"></a>

```csharp
public string RegistryServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistries.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolDataDisks <a name="BatchPoolDataDisks" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolDataDisks {
    double DiskSizeGb,
    double Lun,
    string Caching = null,
    string StorageAccountType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun">Lun</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#lun BatchPool#lun}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching">Caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#caching BatchPool#caching}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}. |

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.lun"></a>

```csharp
public double Lun { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#lun BatchPool#lun}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.caching"></a>

```csharp
public string Caching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#caching BatchPool#caching}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisks.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}.

---

### BatchPoolDiskEncryption <a name="BatchPoolDiskEncryption" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolDiskEncryption {
    string DiskEncryptionTarget
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget">DiskEncryptionTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}. |

---

##### `DiskEncryptionTarget`<sup>Required</sup> <a name="DiskEncryptionTarget" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryption.property.diskEncryptionTarget"></a>

```csharp
public string DiskEncryptionTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}.

---

### BatchPoolExtensions <a name="BatchPoolExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolExtensions {
    string Name,
    string Publisher,
    string Type,
    object AutoUpgradeMinorVersion = null,
    string ProtectedSettings = null,
    string[] ProvisionAfterExtensions = null,
    string SettingsJson = null,
    string TypeHandlerVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type BatchPool#type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson">SettingsJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type BatchPool#type}.

---

##### `AutoUpgradeMinorVersion`<sup>Optional</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.autoUpgradeMinorVersion"></a>

```csharp
public object AutoUpgradeMinorVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}.

---

##### `ProvisionAfterExtensions`<sup>Optional</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.provisionAfterExtensions"></a>

```csharp
public string[] ProvisionAfterExtensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}.

---

##### `SettingsJson`<sup>Optional</sup> <a name="SettingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.settingsJson"></a>

```csharp
public string SettingsJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}.

---

##### `TypeHandlerVersion`<sup>Optional</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensions.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}.

---

### BatchPoolFixedScale <a name="BatchPoolFixedScale" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolFixedScale {
    string NodeDeallocationMethod = null,
    string ResizeTimeout = null,
    double TargetDedicatedNodes = null,
    double TargetLowPriorityNodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod">NodeDeallocationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout">ResizeTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes">TargetDedicatedNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes">TargetLowPriorityNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}. |

---

##### `NodeDeallocationMethod`<sup>Optional</sup> <a name="NodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.nodeDeallocationMethod"></a>

```csharp
public string NodeDeallocationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}.

---

##### `ResizeTimeout`<sup>Optional</sup> <a name="ResizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.resizeTimeout"></a>

```csharp
public string ResizeTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}.

---

##### `TargetDedicatedNodes`<sup>Optional</sup> <a name="TargetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetDedicatedNodes"></a>

```csharp
public double TargetDedicatedNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}.

---

##### `TargetLowPriorityNodes`<sup>Optional</sup> <a name="TargetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale.property.targetLowPriorityNodes"></a>

```csharp
public double TargetLowPriorityNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}.

---

### BatchPoolIdentity <a name="BatchPoolIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type BatchPool#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#type BatchPool#type}.

---

### BatchPoolMount <a name="BatchPoolMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMount {
    BatchPoolMountAzureBlobFileSystem AzureBlobFileSystem = null,
    object AzureFileShare = null,
    object CifsMount = null,
    object NfsMount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem">AzureBlobFileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | azure_blob_file_system block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare">AzureFileShare</a></code> | <code>object</code> | azure_file_share block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount">CifsMount</a></code> | <code>object</code> | cifs_mount block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount">NfsMount</a></code> | <code>object</code> | nfs_mount block. |

---

##### `AzureBlobFileSystem`<sup>Optional</sup> <a name="AzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureBlobFileSystem"></a>

```csharp
public BatchPoolMountAzureBlobFileSystem AzureBlobFileSystem { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

azure_blob_file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#azure_blob_file_system BatchPool#azure_blob_file_system}

---

##### `AzureFileShare`<sup>Optional</sup> <a name="AzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.azureFileShare"></a>

```csharp
public object AzureFileShare { get; set; }
```

- *Type:* object

azure_file_share block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#azure_file_share BatchPool#azure_file_share}

---

##### `CifsMount`<sup>Optional</sup> <a name="CifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.cifsMount"></a>

```csharp
public object CifsMount { get; set; }
```

- *Type:* object

cifs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#cifs_mount BatchPool#cifs_mount}

---

##### `NfsMount`<sup>Optional</sup> <a name="NfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMount.property.nfsMount"></a>

```csharp
public object NfsMount { get; set; }
```

- *Type:* object

nfs_mount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#nfs_mount BatchPool#nfs_mount}

---

### BatchPoolMountAzureBlobFileSystem <a name="BatchPoolMountAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountAzureBlobFileSystem {
    string AccountName,
    string ContainerName,
    string RelativeMountPath,
    string AccountKey = null,
    string BlobfuseOptions = null,
    string IdentityId = null,
    string SasKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container_name BatchPool#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey">AccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions">BlobfuseOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId">IdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey">SasKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}. |

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container_name BatchPool#container_name}.

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.accountKey"></a>

```csharp
public string AccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `BlobfuseOptions`<sup>Optional</sup> <a name="BlobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.blobfuseOptions"></a>

```csharp
public string BlobfuseOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.identityId"></a>

```csharp
public string IdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}.

---

##### `SasKey`<sup>Optional</sup> <a name="SasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem.property.sasKey"></a>

```csharp
public string SasKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}.

---

### BatchPoolMountAzureFileShare <a name="BatchPoolMountAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountAzureFileShare {
    string AccountKey,
    string AccountName,
    string AzureFileUrl,
    string RelativeMountPath,
    string MountOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey">AccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_key BatchPool#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_name BatchPool#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl">AzureFileUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions">MountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountKey"></a>

```csharp
public string AccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_key BatchPool#account_key}.

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#account_name BatchPool#account_name}.

---

##### `AzureFileUrl`<sup>Required</sup> <a name="AzureFileUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.azureFileUrl"></a>

```csharp
public string AzureFileUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}.

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShare.property.mountOptions"></a>

```csharp
public string MountOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountCifsMount <a name="BatchPoolMountCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountCifsMount {
    string Password,
    string RelativeMountPath,
    string Source,
    string UserName,
    string MountOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions">MountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMount.property.mountOptions"></a>

```csharp
public string MountOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolMountNfsMount <a name="BatchPoolMountNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountNfsMount {
    string RelativeMountPath,
    string Source,
    string MountOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source BatchPool#source}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions">MountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}. |

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source BatchPool#source}.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMount.property.mountOptions"></a>

```csharp
public string MountOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}.

---

### BatchPoolNetworkConfiguration <a name="BatchPoolNetworkConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfiguration {
    string SubnetId,
    string DynamicVnetAssignmentScope = null,
    object EndpointConfiguration = null,
    string PublicAddressProvisioningType = null,
    string[] PublicIps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope">DynamicVnetAssignmentScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration">EndpointConfiguration</a></code> | <code>object</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType">PublicAddressProvisioningType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps">PublicIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}.

---

##### `DynamicVnetAssignmentScope`<sup>Optional</sup> <a name="DynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.dynamicVnetAssignmentScope"></a>

```csharp
public string DynamicVnetAssignmentScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.endpointConfiguration"></a>

```csharp
public object EndpointConfiguration { get; set; }
```

- *Type:* object

endpoint_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#endpoint_configuration BatchPool#endpoint_configuration}

---

##### `PublicAddressProvisioningType`<sup>Optional</sup> <a name="PublicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicAddressProvisioningType"></a>

```csharp
public string PublicAddressProvisioningType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}.

---

##### `PublicIps`<sup>Optional</sup> <a name="PublicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration.property.publicIps"></a>

```csharp
public string[] PublicIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}.

---

### BatchPoolNetworkConfigurationEndpointConfiguration <a name="BatchPoolNetworkConfigurationEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfigurationEndpointConfiguration {
    double BackendPort,
    string FrontendPortRange,
    string Name,
    string Protocol,
    object NetworkSecurityGroupRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort">BackendPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange">FrontendPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#protocol BatchPool#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules">NetworkSecurityGroupRules</a></code> | <code>object</code> | network_security_group_rules block. |

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.backendPort"></a>

```csharp
public double BackendPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}.

---

##### `FrontendPortRange`<sup>Required</sup> <a name="FrontendPortRange" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.frontendPortRange"></a>

```csharp
public string FrontendPortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#protocol BatchPool#protocol}.

---

##### `NetworkSecurityGroupRules`<sup>Optional</sup> <a name="NetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfiguration.property.networkSecurityGroupRules"></a>

```csharp
public object NetworkSecurityGroupRules { get; set; }
```

- *Type:* object

network_security_group_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#network_security_group_rules BatchPool#network_security_group_rules}

---

### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules {
    string Access,
    double Priority,
    string SourceAddressPrefix,
    string[] SourcePortRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access">Access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#access BatchPool#access}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#priority BatchPool#priority}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}. |

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#access BatchPool#access}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#priority BatchPool#priority}.

---

##### `SourceAddressPrefix`<sup>Required</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourceAddressPrefix"></a>

```csharp
public string SourceAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}.

---

##### `SourcePortRanges`<sup>Optional</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}.

---

### BatchPoolNodePlacement <a name="BatchPoolNodePlacement" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNodePlacement {
    string Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#policy BatchPool#policy}. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacement.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#policy BatchPool#policy}.

---

### BatchPoolStartTask <a name="BatchPoolStartTask" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTask {
    string CommandLine,
    BatchPoolStartTaskUserIdentity UserIdentity,
    System.Collections.Generic.IDictionary<string, string> CommonEnvironmentProperties = null,
    object Container = null,
    object ResourceFile = null,
    double TaskRetryMaximum = null,
    object WaitForSuccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine">CommandLine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#command_line BatchPool#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity">UserIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | user_identity block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties">CommonEnvironmentProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container">Container</a></code> | <code>object</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile">ResourceFile</a></code> | <code>object</code> | resource_file block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum">TaskRetryMaximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess">WaitForSuccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}. |

---

##### `CommandLine`<sup>Required</sup> <a name="CommandLine" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commandLine"></a>

```csharp
public string CommandLine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#command_line BatchPool#command_line}.

---

##### `UserIdentity`<sup>Required</sup> <a name="UserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.userIdentity"></a>

```csharp
public BatchPoolStartTaskUserIdentity UserIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

user_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_identity BatchPool#user_identity}

---

##### `CommonEnvironmentProperties`<sup>Optional</sup> <a name="CommonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.commonEnvironmentProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CommonEnvironmentProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}.

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.container"></a>

```csharp
public object Container { get; set; }
```

- *Type:* object

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#container BatchPool#container}

---

##### `ResourceFile`<sup>Optional</sup> <a name="ResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.resourceFile"></a>

```csharp
public object ResourceFile { get; set; }
```

- *Type:* object

resource_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#resource_file BatchPool#resource_file}

---

##### `TaskRetryMaximum`<sup>Optional</sup> <a name="TaskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.taskRetryMaximum"></a>

```csharp
public double TaskRetryMaximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}.

---

##### `WaitForSuccess`<sup>Optional</sup> <a name="WaitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTask.property.waitForSuccess"></a>

```csharp
public object WaitForSuccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}.

---

### BatchPoolStartTaskContainer <a name="BatchPoolStartTaskContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskContainer {
    string ImageName,
    object Registry = null,
    string RunOptions = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#image_name BatchPool#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry">Registry</a></code> | <code>object</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions">RunOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#run_options BatchPool#run_options}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#image_name BatchPool#image_name}.

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.registry"></a>

```csharp
public object Registry { get; set; }
```

- *Type:* object

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#registry BatchPool#registry}

---

##### `RunOptions`<sup>Optional</sup> <a name="RunOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.runOptions"></a>

```csharp
public string RunOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#run_options BatchPool#run_options}.

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainer.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}.

---

### BatchPoolStartTaskContainerRegistry <a name="BatchPoolStartTaskContainerRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskContainerRegistry {
    string RegistryServer,
    string Password = null,
    string UserAssignedIdentityId = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer">RegistryServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `RegistryServer`<sup>Required</sup> <a name="RegistryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.registryServer"></a>

```csharp
public string RegistryServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistry.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskResourceFile <a name="BatchPoolStartTaskResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskResourceFile {
    string AutoStorageContainerName = null,
    string BlobPrefix = null,
    string FileMode = null,
    string FilePath = null,
    string HttpUrl = null,
    string StorageContainerUrl = null,
    string UserAssignedIdentityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName">AutoStorageContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix">BlobPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode">FileMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath">FilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#file_path BatchPool#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl">HttpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#http_url BatchPool#http_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl">StorageContainerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}. |

---

##### `AutoStorageContainerName`<sup>Optional</sup> <a name="AutoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.autoStorageContainerName"></a>

```csharp
public string AutoStorageContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}.

---

##### `BlobPrefix`<sup>Optional</sup> <a name="BlobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.blobPrefix"></a>

```csharp
public string BlobPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}.

---

##### `FileMode`<sup>Optional</sup> <a name="FileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.fileMode"></a>

```csharp
public string FileMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}.

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#file_path BatchPool#file_path}.

---

##### `HttpUrl`<sup>Optional</sup> <a name="HttpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.httpUrl"></a>

```csharp
public string HttpUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#http_url BatchPool#http_url}.

---

##### `StorageContainerUrl`<sup>Optional</sup> <a name="StorageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.storageContainerUrl"></a>

```csharp
public string StorageContainerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFile.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}.

---

### BatchPoolStartTaskUserIdentity <a name="BatchPoolStartTaskUserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskUserIdentity {
    BatchPoolStartTaskUserIdentityAutoUser AutoUser = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser">AutoUser</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | auto_user block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}. |

---

##### `AutoUser`<sup>Optional</sup> <a name="AutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.autoUser"></a>

```csharp
public BatchPoolStartTaskUserIdentityAutoUser AutoUser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

auto_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#auto_user BatchPool#auto_user}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#user_name BatchPool#user_name}.

---

### BatchPoolStartTaskUserIdentityAutoUser <a name="BatchPoolStartTaskUserIdentityAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskUserIdentityAutoUser {
    string ElevationLevel = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel">ElevationLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#scope BatchPool#scope}. |

---

##### `ElevationLevel`<sup>Optional</sup> <a name="ElevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.elevationLevel"></a>

```csharp
public string ElevationLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#scope BatchPool#scope}.

---

### BatchPoolStorageImageReference <a name="BatchPoolStorageImageReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStorageImageReference {
    string Id = null,
    string Offer = null,
    string Publisher = null,
    string Sku = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#id BatchPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#offer BatchPool#offer}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#publisher BatchPool#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#sku BatchPool#sku}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#version BatchPool#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#id BatchPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Offer`<sup>Optional</sup> <a name="Offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#offer BatchPool#offer}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#publisher BatchPool#publisher}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#sku BatchPool#sku}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#version BatchPool#version}.

---

### BatchPoolTaskSchedulingPolicy <a name="BatchPoolTaskSchedulingPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolTaskSchedulingPolicy {
    string NodeFillType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType">NodeFillType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}. |

---

##### `NodeFillType`<sup>Optional</sup> <a name="NodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicy.property.nodeFillType"></a>

```csharp
public string NodeFillType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}.

---

### BatchPoolTimeouts <a name="BatchPoolTimeouts" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#create BatchPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#delete BatchPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#read BatchPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#update BatchPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#create BatchPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#delete BatchPool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#read BatchPool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#update BatchPool#update}.

---

### BatchPoolUserAccounts <a name="BatchPoolUserAccounts" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccounts {
    string ElevationLevel,
    string Name,
    string Password,
    object LinuxUserConfiguration = null,
    object WindowsUserConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel">ElevationLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration">LinuxUserConfiguration</a></code> | <code>object</code> | linux_user_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration">WindowsUserConfiguration</a></code> | <code>object</code> | windows_user_configuration block. |

---

##### `ElevationLevel`<sup>Required</sup> <a name="ElevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.elevationLevel"></a>

```csharp
public string ElevationLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#name BatchPool#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#password BatchPool#password}.

---

##### `LinuxUserConfiguration`<sup>Optional</sup> <a name="LinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.linuxUserConfiguration"></a>

```csharp
public object LinuxUserConfiguration { get; set; }
```

- *Type:* object

linux_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#linux_user_configuration BatchPool#linux_user_configuration}

---

##### `WindowsUserConfiguration`<sup>Optional</sup> <a name="WindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccounts.property.windowsUserConfiguration"></a>

```csharp
public object WindowsUserConfiguration { get; set; }
```

- *Type:* object

windows_user_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#windows_user_configuration BatchPool#windows_user_configuration}

---

### BatchPoolUserAccountsLinuxUserConfiguration <a name="BatchPoolUserAccountsLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsLinuxUserConfiguration {
    double Gid = null,
    string SshPrivateKey = null,
    double Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid">Gid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#gid BatchPool#gid}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey">SshPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid">Uid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#uid BatchPool#uid}. |

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.gid"></a>

```csharp
public double Gid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#gid BatchPool#gid}.

---

##### `SshPrivateKey`<sup>Optional</sup> <a name="SshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.sshPrivateKey"></a>

```csharp
public string SshPrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}.

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfiguration.property.uid"></a>

```csharp
public double Uid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#uid BatchPool#uid}.

---

### BatchPoolUserAccountsWindowsUserConfiguration <a name="BatchPoolUserAccountsWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsWindowsUserConfiguration {
    string LoginMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode">LoginMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}. |

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfiguration.property.loginMode"></a>

```csharp
public string LoginMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}.

---

### BatchPoolWindows <a name="BatchPoolWindows" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolWindows {
    object EnableAutomaticUpdates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}. |

---

##### `EnableAutomaticUpdates`<sup>Optional</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindows.property.enableAutomaticUpdates"></a>

```csharp
public object EnableAutomaticUpdates { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchPoolAutoScaleOutputReference <a name="BatchPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolAutoScaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval">ResetEvaluationInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluationInterval` <a name="ResetEvaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.resetEvaluationInterval"></a>

```csharp
private void ResetEvaluationInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput">EvaluationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput">FormulaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval">EvaluationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula">Formula</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluationIntervalInput`<sup>Optional</sup> <a name="EvaluationIntervalInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationIntervalInput"></a>

```csharp
public string EvaluationIntervalInput { get; }
```

- *Type:* string

---

##### `FormulaInput`<sup>Optional</sup> <a name="FormulaInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formulaInput"></a>

```csharp
public string FormulaInput { get; }
```

- *Type:* string

---

##### `EvaluationInterval`<sup>Required</sup> <a name="EvaluationInterval" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.evaluationInterval"></a>

```csharp
public string EvaluationInterval { get; }
```

- *Type:* string

---

##### `Formula`<sup>Required</sup> <a name="Formula" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.formula"></a>

```csharp
public string Formula { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolAutoScaleOutputReference.property.internalValue"></a>

```csharp
public BatchPoolAutoScale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolAutoScale">BatchPoolAutoScale</a>

---


### BatchPoolCertificateList <a name="BatchPoolCertificateList" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get"></a>

```csharp
private BatchPoolCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolCertificateOutputReference <a name="BatchPoolCertificateOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName">ResetStoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStoreName` <a name="ResetStoreName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetStoreName"></a>

```csharp
private void ResetStoreName()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.resetVisibility"></a>

```csharp
private void ResetVisibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput">StoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput">StoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput">VisibilityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation">StoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName">StoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility">Visibility</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StoreLocationInput`<sup>Optional</sup> <a name="StoreLocationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocationInput"></a>

```csharp
public string StoreLocationInput { get; }
```

- *Type:* string

---

##### `StoreNameInput`<sup>Optional</sup> <a name="StoreNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeNameInput"></a>

```csharp
public string StoreNameInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibilityInput"></a>

```csharp
public string[] VisibilityInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StoreLocation`<sup>Required</sup> <a name="StoreLocation" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeLocation"></a>

```csharp
public string StoreLocation { get; }
```

- *Type:* string

---

##### `StoreName`<sup>Required</sup> <a name="StoreName" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.storeName"></a>

```csharp
public string StoreName { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.visibility"></a>

```csharp
public string[] Visibility { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolCertificateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolContainerConfigurationContainerRegistriesList <a name="BatchPoolContainerConfigurationContainerRegistriesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolContainerConfigurationContainerRegistriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get"></a>

```csharp
private BatchPoolContainerConfigurationContainerRegistriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolContainerConfigurationContainerRegistriesOutputReference <a name="BatchPoolContainerConfigurationContainerRegistriesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolContainerConfigurationContainerRegistriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer">ResetRegistryServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRegistryServer` <a name="ResetRegistryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetRegistryServer"></a>

```csharp
private void ResetRegistryServer()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput">RegistryServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer">RegistryServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegistryServerInput`<sup>Optional</sup> <a name="RegistryServerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServerInput"></a>

```csharp
public string RegistryServerInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RegistryServer`<sup>Required</sup> <a name="RegistryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.registryServer"></a>

```csharp
public string RegistryServer { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolContainerConfigurationOutputReference <a name="BatchPoolContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolContainerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries">PutContainerRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames">ResetContainerImageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries">ResetContainerRegistries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerRegistries` <a name="PutContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries"></a>

```csharp
private void PutContainerRegistries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.putContainerRegistries.parameter.value"></a>

- *Type:* object

---

##### `ResetContainerImageNames` <a name="ResetContainerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerImageNames"></a>

```csharp
private void ResetContainerImageNames()
```

##### `ResetContainerRegistries` <a name="ResetContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetContainerRegistries"></a>

```csharp
private void ResetContainerRegistries()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries">ContainerRegistries</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput">ContainerImageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput">ContainerRegistriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames">ContainerImageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerRegistries`<sup>Required</sup> <a name="ContainerRegistries" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistries"></a>

```csharp
public BatchPoolContainerConfigurationContainerRegistriesList ContainerRegistries { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationContainerRegistriesList">BatchPoolContainerConfigurationContainerRegistriesList</a>

---

##### `ContainerImageNamesInput`<sup>Optional</sup> <a name="ContainerImageNamesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNamesInput"></a>

```csharp
public string[] ContainerImageNamesInput { get; }
```

- *Type:* string[]

---

##### `ContainerRegistriesInput`<sup>Optional</sup> <a name="ContainerRegistriesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerRegistriesInput"></a>

```csharp
public object ContainerRegistriesInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContainerImageNames`<sup>Required</sup> <a name="ContainerImageNames" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.containerImageNames"></a>

```csharp
public string[] ContainerImageNames { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfigurationOutputReference.property.internalValue"></a>

```csharp
public BatchPoolContainerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolContainerConfiguration">BatchPoolContainerConfiguration</a>

---


### BatchPoolDataDisksList <a name="BatchPoolDataDisksList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolDataDisksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get"></a>

```csharp
private BatchPoolDataDisksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolDataDisksOutputReference <a name="BatchPoolDataDisksOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolDataDisksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaching` <a name="ResetCaching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetCaching"></a>

```csharp
private void ResetCaching()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.resetStorageAccountType"></a>

```csharp
private void ResetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput">CachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput">LunInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun">Lun</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.cachingInput"></a>

```csharp
public string CachingInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lunInput"></a>

```csharp
public double LunInput { get; }
```

- *Type:* double

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.lun"></a>

```csharp
public double Lun { get; }
```

- *Type:* double

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDataDisksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolDiskEncryptionList <a name="BatchPoolDiskEncryptionList" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolDiskEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get"></a>

```csharp
private BatchPoolDiskEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolDiskEncryptionOutputReference <a name="BatchPoolDiskEncryptionOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolDiskEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput">DiskEncryptionTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget">DiskEncryptionTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionTargetInput`<sup>Optional</sup> <a name="DiskEncryptionTargetInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTargetInput"></a>

```csharp
public string DiskEncryptionTargetInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionTarget`<sup>Required</sup> <a name="DiskEncryptionTarget" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.diskEncryptionTarget"></a>

```csharp
public string DiskEncryptionTarget { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolDiskEncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolExtensionsList <a name="BatchPoolExtensionsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get"></a>

```csharp
private BatchPoolExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolExtensionsOutputReference <a name="BatchPoolExtensionsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion">ResetAutoUpgradeMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions">ResetProvisionAfterExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson">ResetSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion">ResetTypeHandlerVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoUpgradeMinorVersion` <a name="ResetAutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetAutoUpgradeMinorVersion"></a>

```csharp
private void ResetAutoUpgradeMinorVersion()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProtectedSettings"></a>

```csharp
private void ResetProtectedSettings()
```

##### `ResetProvisionAfterExtensions` <a name="ResetProvisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetProvisionAfterExtensions"></a>

```csharp
private void ResetProvisionAfterExtensions()
```

##### `ResetSettingsJson` <a name="ResetSettingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetSettingsJson"></a>

```csharp
private void ResetSettingsJson()
```

##### `ResetTypeHandlerVersion` <a name="ResetTypeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.resetTypeHandlerVersion"></a>

```csharp
private void ResetTypeHandlerVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput">AutoUpgradeMinorVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput">ProvisionAfterExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput">SettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput">TypeHandlerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion">AutoUpgradeMinorVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions">ProvisionAfterExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson">SettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoUpgradeMinorVersionInput`<sup>Optional</sup> <a name="AutoUpgradeMinorVersionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersionInput"></a>

```csharp
public object AutoUpgradeMinorVersionInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettingsInput"></a>

```csharp
public string ProtectedSettingsInput { get; }
```

- *Type:* string

---

##### `ProvisionAfterExtensionsInput`<sup>Optional</sup> <a name="ProvisionAfterExtensionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensionsInput"></a>

```csharp
public string[] ProvisionAfterExtensionsInput { get; }
```

- *Type:* string[]

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SettingsJsonInput`<sup>Optional</sup> <a name="SettingsJsonInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJsonInput"></a>

```csharp
public string SettingsJsonInput { get; }
```

- *Type:* string

---

##### `TypeHandlerVersionInput`<sup>Optional</sup> <a name="TypeHandlerVersionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersionInput"></a>

```csharp
public string TypeHandlerVersionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AutoUpgradeMinorVersion`<sup>Required</sup> <a name="AutoUpgradeMinorVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.autoUpgradeMinorVersion"></a>

```csharp
public object AutoUpgradeMinorVersion { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.protectedSettings"></a>

```csharp
public string ProtectedSettings { get; }
```

- *Type:* string

---

##### `ProvisionAfterExtensions`<sup>Required</sup> <a name="ProvisionAfterExtensions" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.provisionAfterExtensions"></a>

```csharp
public string[] ProvisionAfterExtensions { get; }
```

- *Type:* string[]

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `SettingsJson`<sup>Required</sup> <a name="SettingsJson" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.settingsJson"></a>

```csharp
public string SettingsJson { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.typeHandlerVersion"></a>

```csharp
public string TypeHandlerVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolFixedScaleOutputReference <a name="BatchPoolFixedScaleOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolFixedScaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod">ResetNodeDeallocationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout">ResetResizeTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes">ResetTargetDedicatedNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes">ResetTargetLowPriorityNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeDeallocationMethod` <a name="ResetNodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetNodeDeallocationMethod"></a>

```csharp
private void ResetNodeDeallocationMethod()
```

##### `ResetResizeTimeout` <a name="ResetResizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetResizeTimeout"></a>

```csharp
private void ResetResizeTimeout()
```

##### `ResetTargetDedicatedNodes` <a name="ResetTargetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetDedicatedNodes"></a>

```csharp
private void ResetTargetDedicatedNodes()
```

##### `ResetTargetLowPriorityNodes` <a name="ResetTargetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.resetTargetLowPriorityNodes"></a>

```csharp
private void ResetTargetLowPriorityNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput">NodeDeallocationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput">ResizeTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput">TargetDedicatedNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput">TargetLowPriorityNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod">NodeDeallocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout">ResizeTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes">TargetDedicatedNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes">TargetLowPriorityNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeDeallocationMethodInput`<sup>Optional</sup> <a name="NodeDeallocationMethodInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethodInput"></a>

```csharp
public string NodeDeallocationMethodInput { get; }
```

- *Type:* string

---

##### `ResizeTimeoutInput`<sup>Optional</sup> <a name="ResizeTimeoutInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeoutInput"></a>

```csharp
public string ResizeTimeoutInput { get; }
```

- *Type:* string

---

##### `TargetDedicatedNodesInput`<sup>Optional</sup> <a name="TargetDedicatedNodesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodesInput"></a>

```csharp
public double TargetDedicatedNodesInput { get; }
```

- *Type:* double

---

##### `TargetLowPriorityNodesInput`<sup>Optional</sup> <a name="TargetLowPriorityNodesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodesInput"></a>

```csharp
public double TargetLowPriorityNodesInput { get; }
```

- *Type:* double

---

##### `NodeDeallocationMethod`<sup>Required</sup> <a name="NodeDeallocationMethod" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.nodeDeallocationMethod"></a>

```csharp
public string NodeDeallocationMethod { get; }
```

- *Type:* string

---

##### `ResizeTimeout`<sup>Required</sup> <a name="ResizeTimeout" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.resizeTimeout"></a>

```csharp
public string ResizeTimeout { get; }
```

- *Type:* string

---

##### `TargetDedicatedNodes`<sup>Required</sup> <a name="TargetDedicatedNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetDedicatedNodes"></a>

```csharp
public double TargetDedicatedNodes { get; }
```

- *Type:* double

---

##### `TargetLowPriorityNodes`<sup>Required</sup> <a name="TargetLowPriorityNodes" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.targetLowPriorityNodes"></a>

```csharp
public double TargetLowPriorityNodes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolFixedScaleOutputReference.property.internalValue"></a>

```csharp
public BatchPoolFixedScale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolFixedScale">BatchPoolFixedScale</a>

---


### BatchPoolIdentityOutputReference <a name="BatchPoolIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolIdentityOutputReference.property.internalValue"></a>

```csharp
public BatchPoolIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolIdentity">BatchPoolIdentity</a>

---


### BatchPoolMountAzureBlobFileSystemOutputReference <a name="BatchPoolMountAzureBlobFileSystemOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountAzureBlobFileSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions">ResetBlobfuseOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey">ResetSasKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountKey` <a name="ResetAccountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetAccountKey"></a>

```csharp
private void ResetAccountKey()
```

##### `ResetBlobfuseOptions` <a name="ResetBlobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetBlobfuseOptions"></a>

```csharp
private void ResetBlobfuseOptions()
```

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetIdentityId"></a>

```csharp
private void ResetIdentityId()
```

##### `ResetSasKey` <a name="ResetSasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.resetSasKey"></a>

```csharp
private void ResetSasKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput">AccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput">BlobfuseOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput">IdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput">RelativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput">SasKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey">AccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions">BlobfuseOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId">IdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey">SasKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKeyInput"></a>

```csharp
public string AccountKeyInput { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `BlobfuseOptionsInput`<sup>Optional</sup> <a name="BlobfuseOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptionsInput"></a>

```csharp
public string BlobfuseOptionsInput { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityIdInput"></a>

```csharp
public string IdentityIdInput { get; }
```

- *Type:* string

---

##### `RelativeMountPathInput`<sup>Optional</sup> <a name="RelativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPathInput"></a>

```csharp
public string RelativeMountPathInput { get; }
```

- *Type:* string

---

##### `SasKeyInput`<sup>Optional</sup> <a name="SasKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKeyInput"></a>

```csharp
public string SasKeyInput { get; }
```

- *Type:* string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountKey"></a>

```csharp
public string AccountKey { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `BlobfuseOptions`<sup>Required</sup> <a name="BlobfuseOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.blobfuseOptions"></a>

```csharp
public string BlobfuseOptions { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.identityId"></a>

```csharp
public string IdentityId { get; }
```

- *Type:* string

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; }
```

- *Type:* string

---

##### `SasKey`<sup>Required</sup> <a name="SasKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.sasKey"></a>

```csharp
public string SasKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference.property.internalValue"></a>

```csharp
public BatchPoolMountAzureBlobFileSystem InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---


### BatchPoolMountAzureFileShareList <a name="BatchPoolMountAzureFileShareList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountAzureFileShareList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get"></a>

```csharp
private BatchPoolMountAzureFileShareOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolMountAzureFileShareOutputReference <a name="BatchPoolMountAzureFileShareOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountAzureFileShareOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput">AccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput">AzureFileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput">RelativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey">AccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl">AzureFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions">MountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKeyInput"></a>

```csharp
public string AccountKeyInput { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AzureFileUrlInput`<sup>Optional</sup> <a name="AzureFileUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrlInput"></a>

```csharp
public string AzureFileUrlInput { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptionsInput"></a>

```csharp
public string MountOptionsInput { get; }
```

- *Type:* string

---

##### `RelativeMountPathInput`<sup>Optional</sup> <a name="RelativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPathInput"></a>

```csharp
public string RelativeMountPathInput { get; }
```

- *Type:* string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountKey"></a>

```csharp
public string AccountKey { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AzureFileUrl`<sup>Required</sup> <a name="AzureFileUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.azureFileUrl"></a>

```csharp
public string AzureFileUrl { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.mountOptions"></a>

```csharp
public string MountOptions { get; }
```

- *Type:* string

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolMountCifsMountList <a name="BatchPoolMountCifsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountCifsMountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get"></a>

```csharp
private BatchPoolMountCifsMountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolMountCifsMountOutputReference <a name="BatchPoolMountCifsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountCifsMountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput">RelativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions">MountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptionsInput"></a>

```csharp
public string MountOptionsInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RelativeMountPathInput`<sup>Optional</sup> <a name="RelativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPathInput"></a>

```csharp
public string RelativeMountPathInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.mountOptions"></a>

```csharp
public string MountOptions { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolMountList <a name="BatchPoolMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get"></a>

```csharp
private BatchPoolMountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolMountNfsMountList <a name="BatchPoolMountNfsMountList" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountNfsMountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get"></a>

```csharp
private BatchPoolMountNfsMountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolMountNfsMountOutputReference <a name="BatchPoolMountNfsMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountNfsMountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput">RelativeMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions">MountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath">RelativeMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptionsInput"></a>

```csharp
public string MountOptionsInput { get; }
```

- *Type:* string

---

##### `RelativeMountPathInput`<sup>Optional</sup> <a name="RelativeMountPathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPathInput"></a>

```csharp
public string RelativeMountPathInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.mountOptions"></a>

```csharp
public string MountOptions { get; }
```

- *Type:* string

---

##### `RelativeMountPath`<sup>Required</sup> <a name="RelativeMountPath" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.relativeMountPath"></a>

```csharp
public string RelativeMountPath { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolMountOutputReference <a name="BatchPoolMountOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolMountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem">PutAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare">PutAzureFileShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount">PutCifsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount">PutNfsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem">ResetAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare">ResetAzureFileShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount">ResetCifsMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount">ResetNfsMount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureBlobFileSystem` <a name="PutAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem"></a>

```csharp
private void PutAzureBlobFileSystem(BatchPoolMountAzureBlobFileSystem Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureBlobFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---

##### `PutAzureFileShare` <a name="PutAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare"></a>

```csharp
private void PutAzureFileShare(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putAzureFileShare.parameter.value"></a>

- *Type:* object

---

##### `PutCifsMount` <a name="PutCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount"></a>

```csharp
private void PutCifsMount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putCifsMount.parameter.value"></a>

- *Type:* object

---

##### `PutNfsMount` <a name="PutNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount"></a>

```csharp
private void PutNfsMount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.putNfsMount.parameter.value"></a>

- *Type:* object

---

##### `ResetAzureBlobFileSystem` <a name="ResetAzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureBlobFileSystem"></a>

```csharp
private void ResetAzureBlobFileSystem()
```

##### `ResetAzureFileShare` <a name="ResetAzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetAzureFileShare"></a>

```csharp
private void ResetAzureFileShare()
```

##### `ResetCifsMount` <a name="ResetCifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetCifsMount"></a>

```csharp
private void ResetCifsMount()
```

##### `ResetNfsMount` <a name="ResetNfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.resetNfsMount"></a>

```csharp
private void ResetNfsMount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem">AzureBlobFileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare">AzureFileShare</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount">CifsMount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount">NfsMount</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput">AzureBlobFileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput">AzureFileShareInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput">CifsMountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput">NfsMountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureBlobFileSystem`<sup>Required</sup> <a name="AzureBlobFileSystem" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystem"></a>

```csharp
public BatchPoolMountAzureBlobFileSystemOutputReference AzureBlobFileSystem { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystemOutputReference">BatchPoolMountAzureBlobFileSystemOutputReference</a>

---

##### `AzureFileShare`<sup>Required</sup> <a name="AzureFileShare" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShare"></a>

```csharp
public BatchPoolMountAzureFileShareList AzureFileShare { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureFileShareList">BatchPoolMountAzureFileShareList</a>

---

##### `CifsMount`<sup>Required</sup> <a name="CifsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMount"></a>

```csharp
public BatchPoolMountCifsMountList CifsMount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountCifsMountList">BatchPoolMountCifsMountList</a>

---

##### `NfsMount`<sup>Required</sup> <a name="NfsMount" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMount"></a>

```csharp
public BatchPoolMountNfsMountList NfsMount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountNfsMountList">BatchPoolMountNfsMountList</a>

---

##### `AzureBlobFileSystemInput`<sup>Optional</sup> <a name="AzureBlobFileSystemInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureBlobFileSystemInput"></a>

```csharp
public BatchPoolMountAzureBlobFileSystem AzureBlobFileSystemInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolMountAzureBlobFileSystem">BatchPoolMountAzureBlobFileSystem</a>

---

##### `AzureFileShareInput`<sup>Optional</sup> <a name="AzureFileShareInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.azureFileShareInput"></a>

```csharp
public object AzureFileShareInput { get; }
```

- *Type:* object

---

##### `CifsMountInput`<sup>Optional</sup> <a name="CifsMountInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.cifsMountInput"></a>

```csharp
public object CifsMountInput { get; }
```

- *Type:* object

---

##### `NfsMountInput`<sup>Optional</sup> <a name="NfsMountInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.nfsMountInput"></a>

```csharp
public object NfsMountInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolMountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolNetworkConfigurationEndpointConfigurationList <a name="BatchPoolNetworkConfigurationEndpointConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfigurationEndpointConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get"></a>

```csharp
private BatchPoolNetworkConfigurationEndpointConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get"></a>

```csharp
private BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges">ResetSourcePortRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourcePortRanges` <a name="ResetSourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.resetSourcePortRanges"></a>

```csharp
private void ResetSourcePortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput">SourceAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput">SourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SourceAddressPrefixInput`<sup>Optional</sup> <a name="SourceAddressPrefixInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefixInput"></a>

```csharp
public string SourceAddressPrefixInput { get; }
```

- *Type:* string

---

##### `SourcePortRangesInput`<sup>Optional</sup> <a name="SourcePortRangesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRangesInput"></a>

```csharp
public string[] SourcePortRangesInput { get; }
```

- *Type:* string[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SourceAddressPrefix`<sup>Required</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourceAddressPrefix"></a>

```csharp
public string SourceAddressPrefix { get; }
```

- *Type:* string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolNetworkConfigurationEndpointConfigurationOutputReference <a name="BatchPoolNetworkConfigurationEndpointConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfigurationEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules">PutNetworkSecurityGroupRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules">ResetNetworkSecurityGroupRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkSecurityGroupRules` <a name="PutNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules"></a>

```csharp
private void PutNetworkSecurityGroupRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.putNetworkSecurityGroupRules.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworkSecurityGroupRules` <a name="ResetNetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.resetNetworkSecurityGroupRules"></a>

```csharp
private void ResetNetworkSecurityGroupRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules">NetworkSecurityGroupRules</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput">BackendPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput">FrontendPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput">NetworkSecurityGroupRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange">FrontendPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupRules`<sup>Required</sup> <a name="NetworkSecurityGroupRules" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRules"></a>

```csharp
public BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList NetworkSecurityGroupRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList">BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList</a>

---

##### `BackendPortInput`<sup>Optional</sup> <a name="BackendPortInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPortInput"></a>

```csharp
public double BackendPortInput { get; }
```

- *Type:* double

---

##### `FrontendPortRangeInput`<sup>Optional</sup> <a name="FrontendPortRangeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRangeInput"></a>

```csharp
public string FrontendPortRangeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupRulesInput`<sup>Optional</sup> <a name="NetworkSecurityGroupRulesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.networkSecurityGroupRulesInput"></a>

```csharp
public object NetworkSecurityGroupRulesInput { get; }
```

- *Type:* object

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `FrontendPortRange`<sup>Required</sup> <a name="FrontendPortRange" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.frontendPortRange"></a>

```csharp
public string FrontendPortRange { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolNetworkConfigurationOutputReference <a name="BatchPoolNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope">ResetDynamicVnetAssignmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType">ResetPublicAddressProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps">ResetPublicIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.putEndpointConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetDynamicVnetAssignmentScope` <a name="ResetDynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetDynamicVnetAssignmentScope"></a>

```csharp
private void ResetDynamicVnetAssignmentScope()
```

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetPublicAddressProvisioningType` <a name="ResetPublicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicAddressProvisioningType"></a>

```csharp
private void ResetPublicAddressProvisioningType()
```

##### `ResetPublicIps` <a name="ResetPublicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.resetPublicIps"></a>

```csharp
private void ResetPublicIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput">DynamicVnetAssignmentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput">PublicAddressProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput">PublicIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope">DynamicVnetAssignmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType">PublicAddressProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps">PublicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfiguration"></a>

```csharp
public BatchPoolNetworkConfigurationEndpointConfigurationList EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationEndpointConfigurationList">BatchPoolNetworkConfigurationEndpointConfigurationList</a>

---

##### `DynamicVnetAssignmentScopeInput`<sup>Optional</sup> <a name="DynamicVnetAssignmentScopeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScopeInput"></a>

```csharp
public string DynamicVnetAssignmentScopeInput { get; }
```

- *Type:* string

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.endpointConfigurationInput"></a>

```csharp
public object EndpointConfigurationInput { get; }
```

- *Type:* object

---

##### `PublicAddressProvisioningTypeInput`<sup>Optional</sup> <a name="PublicAddressProvisioningTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningTypeInput"></a>

```csharp
public string PublicAddressProvisioningTypeInput { get; }
```

- *Type:* string

---

##### `PublicIpsInput`<sup>Optional</sup> <a name="PublicIpsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIpsInput"></a>

```csharp
public string[] PublicIpsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `DynamicVnetAssignmentScope`<sup>Required</sup> <a name="DynamicVnetAssignmentScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.dynamicVnetAssignmentScope"></a>

```csharp
public string DynamicVnetAssignmentScope { get; }
```

- *Type:* string

---

##### `PublicAddressProvisioningType`<sup>Required</sup> <a name="PublicAddressProvisioningType" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicAddressProvisioningType"></a>

```csharp
public string PublicAddressProvisioningType { get; }
```

- *Type:* string

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.publicIps"></a>

```csharp
public string[] PublicIps { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public BatchPoolNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNetworkConfiguration">BatchPoolNetworkConfiguration</a>

---


### BatchPoolNodePlacementList <a name="BatchPoolNodePlacementList" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNodePlacementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get"></a>

```csharp
private BatchPoolNodePlacementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolNodePlacementOutputReference <a name="BatchPoolNodePlacementOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolNodePlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolNodePlacementOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolStartTaskContainerList <a name="BatchPoolStartTaskContainerList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get"></a>

```csharp
private BatchPoolStartTaskContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolStartTaskContainerOutputReference <a name="BatchPoolStartTaskContainerOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry">PutRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry">ResetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions">ResetRunOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRegistry` <a name="PutRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry"></a>

```csharp
private void PutRegistry(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.putRegistry.parameter.value"></a>

- *Type:* object

---

##### `ResetRegistry` <a name="ResetRegistry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRegistry"></a>

```csharp
private void ResetRegistry()
```

##### `ResetRunOptions` <a name="ResetRunOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetRunOptions"></a>

```csharp
private void ResetRunOptions()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry">Registry</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput">RegistryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput">RunOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions">RunOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registry"></a>

```csharp
public BatchPoolStartTaskContainerRegistryList Registry { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList">BatchPoolStartTaskContainerRegistryList</a>

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.registryInput"></a>

```csharp
public object RegistryInput { get; }
```

- *Type:* object

---

##### `RunOptionsInput`<sup>Optional</sup> <a name="RunOptionsInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptionsInput"></a>

```csharp
public string RunOptionsInput { get; }
```

- *Type:* string

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `RunOptions`<sup>Required</sup> <a name="RunOptions" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.runOptions"></a>

```csharp
public string RunOptions { get; }
```

- *Type:* string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolStartTaskContainerRegistryList <a name="BatchPoolStartTaskContainerRegistryList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskContainerRegistryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get"></a>

```csharp
private BatchPoolStartTaskContainerRegistryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolStartTaskContainerRegistryOutputReference <a name="BatchPoolStartTaskContainerRegistryOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskContainerRegistryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput">RegistryServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer">RegistryServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegistryServerInput`<sup>Optional</sup> <a name="RegistryServerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServerInput"></a>

```csharp
public string RegistryServerInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RegistryServer`<sup>Required</sup> <a name="RegistryServer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.registryServer"></a>

```csharp
public string RegistryServer { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerRegistryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolStartTaskOutputReference <a name="BatchPoolStartTaskOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile">PutResourceFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity">PutUserIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties">ResetCommonEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile">ResetResourceFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum">ResetTaskRetryMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess">ResetWaitForSuccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer"></a>

```csharp
private void PutContainer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putContainer.parameter.value"></a>

- *Type:* object

---

##### `PutResourceFile` <a name="PutResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile"></a>

```csharp
private void PutResourceFile(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putResourceFile.parameter.value"></a>

- *Type:* object

---

##### `PutUserIdentity` <a name="PutUserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity"></a>

```csharp
private void PutUserIdentity(BatchPoolStartTaskUserIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.putUserIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---

##### `ResetCommonEnvironmentProperties` <a name="ResetCommonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetCommonEnvironmentProperties"></a>

```csharp
private void ResetCommonEnvironmentProperties()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetResourceFile` <a name="ResetResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetResourceFile"></a>

```csharp
private void ResetResourceFile()
```

##### `ResetTaskRetryMaximum` <a name="ResetTaskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetTaskRetryMaximum"></a>

```csharp
private void ResetTaskRetryMaximum()
```

##### `ResetWaitForSuccess` <a name="ResetWaitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.resetWaitForSuccess"></a>

```csharp
private void ResetWaitForSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile">ResourceFile</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity">UserIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput">CommandLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput">CommonEnvironmentPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput">ContainerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput">ResourceFileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput">TaskRetryMaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput">UserIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput">WaitForSuccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine">CommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties">CommonEnvironmentProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum">TaskRetryMaximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess">WaitForSuccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.container"></a>

```csharp
public BatchPoolStartTaskContainerList Container { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskContainerList">BatchPoolStartTaskContainerList</a>

---

##### `ResourceFile`<sup>Required</sup> <a name="ResourceFile" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFile"></a>

```csharp
public BatchPoolStartTaskResourceFileList ResourceFile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList">BatchPoolStartTaskResourceFileList</a>

---

##### `UserIdentity`<sup>Required</sup> <a name="UserIdentity" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentity"></a>

```csharp
public BatchPoolStartTaskUserIdentityOutputReference UserIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference">BatchPoolStartTaskUserIdentityOutputReference</a>

---

##### `CommandLineInput`<sup>Optional</sup> <a name="CommandLineInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLineInput"></a>

```csharp
public string CommandLineInput { get; }
```

- *Type:* string

---

##### `CommonEnvironmentPropertiesInput`<sup>Optional</sup> <a name="CommonEnvironmentPropertiesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CommonEnvironmentPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.containerInput"></a>

```csharp
public object ContainerInput { get; }
```

- *Type:* object

---

##### `ResourceFileInput`<sup>Optional</sup> <a name="ResourceFileInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.resourceFileInput"></a>

```csharp
public object ResourceFileInput { get; }
```

- *Type:* object

---

##### `TaskRetryMaximumInput`<sup>Optional</sup> <a name="TaskRetryMaximumInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximumInput"></a>

```csharp
public double TaskRetryMaximumInput { get; }
```

- *Type:* double

---

##### `UserIdentityInput`<sup>Optional</sup> <a name="UserIdentityInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.userIdentityInput"></a>

```csharp
public BatchPoolStartTaskUserIdentity UserIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---

##### `WaitForSuccessInput`<sup>Optional</sup> <a name="WaitForSuccessInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccessInput"></a>

```csharp
public object WaitForSuccessInput { get; }
```

- *Type:* object

---

##### `CommandLine`<sup>Required</sup> <a name="CommandLine" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commandLine"></a>

```csharp
public string CommandLine { get; }
```

- *Type:* string

---

##### `CommonEnvironmentProperties`<sup>Required</sup> <a name="CommonEnvironmentProperties" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.commonEnvironmentProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CommonEnvironmentProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaskRetryMaximum`<sup>Required</sup> <a name="TaskRetryMaximum" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.taskRetryMaximum"></a>

```csharp
public double TaskRetryMaximum { get; }
```

- *Type:* double

---

##### `WaitForSuccess`<sup>Required</sup> <a name="WaitForSuccess" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.waitForSuccess"></a>

```csharp
public object WaitForSuccess { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskOutputReference.property.internalValue"></a>

```csharp
public BatchPoolStartTask InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTask">BatchPoolStartTask</a>

---


### BatchPoolStartTaskResourceFileList <a name="BatchPoolStartTaskResourceFileList" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskResourceFileList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get"></a>

```csharp
private BatchPoolStartTaskResourceFileOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolStartTaskResourceFileOutputReference <a name="BatchPoolStartTaskResourceFileOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskResourceFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName">ResetAutoStorageContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix">ResetBlobPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode">ResetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl">ResetHttpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl">ResetStorageContainerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoStorageContainerName` <a name="ResetAutoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetAutoStorageContainerName"></a>

```csharp
private void ResetAutoStorageContainerName()
```

##### `ResetBlobPrefix` <a name="ResetBlobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetBlobPrefix"></a>

```csharp
private void ResetBlobPrefix()
```

##### `ResetFileMode` <a name="ResetFileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFileMode"></a>

```csharp
private void ResetFileMode()
```

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetFilePath"></a>

```csharp
private void ResetFilePath()
```

##### `ResetHttpUrl` <a name="ResetHttpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetHttpUrl"></a>

```csharp
private void ResetHttpUrl()
```

##### `ResetStorageContainerUrl` <a name="ResetStorageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetStorageContainerUrl"></a>

```csharp
private void ResetStorageContainerUrl()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput">AutoStorageContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput">BlobPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput">FileModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput">HttpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput">StorageContainerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName">AutoStorageContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix">BlobPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode">FileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl">StorageContainerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoStorageContainerNameInput`<sup>Optional</sup> <a name="AutoStorageContainerNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerNameInput"></a>

```csharp
public string AutoStorageContainerNameInput { get; }
```

- *Type:* string

---

##### `BlobPrefixInput`<sup>Optional</sup> <a name="BlobPrefixInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefixInput"></a>

```csharp
public string BlobPrefixInput { get; }
```

- *Type:* string

---

##### `FileModeInput`<sup>Optional</sup> <a name="FileModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileModeInput"></a>

```csharp
public string FileModeInput { get; }
```

- *Type:* string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `HttpUrlInput`<sup>Optional</sup> <a name="HttpUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrlInput"></a>

```csharp
public string HttpUrlInput { get; }
```

- *Type:* string

---

##### `StorageContainerUrlInput`<sup>Optional</sup> <a name="StorageContainerUrlInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrlInput"></a>

```csharp
public string StorageContainerUrlInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `AutoStorageContainerName`<sup>Required</sup> <a name="AutoStorageContainerName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.autoStorageContainerName"></a>

```csharp
public string AutoStorageContainerName { get; }
```

- *Type:* string

---

##### `BlobPrefix`<sup>Required</sup> <a name="BlobPrefix" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.blobPrefix"></a>

```csharp
public string BlobPrefix { get; }
```

- *Type:* string

---

##### `FileMode`<sup>Required</sup> <a name="FileMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.fileMode"></a>

```csharp
public string FileMode { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `StorageContainerUrl`<sup>Required</sup> <a name="StorageContainerUrl" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.storageContainerUrl"></a>

```csharp
public string StorageContainerUrl { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskResourceFileOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolStartTaskUserIdentityAutoUserOutputReference <a name="BatchPoolStartTaskUserIdentityAutoUserOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskUserIdentityAutoUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel">ResetElevationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElevationLevel` <a name="ResetElevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetElevationLevel"></a>

```csharp
private void ResetElevationLevel()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput">ElevationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel">ElevationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElevationLevelInput`<sup>Optional</sup> <a name="ElevationLevelInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevelInput"></a>

```csharp
public string ElevationLevelInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ElevationLevel`<sup>Required</sup> <a name="ElevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.elevationLevel"></a>

```csharp
public string ElevationLevel { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference.property.internalValue"></a>

```csharp
public BatchPoolStartTaskUserIdentityAutoUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---


### BatchPoolStartTaskUserIdentityOutputReference <a name="BatchPoolStartTaskUserIdentityOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStartTaskUserIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser">PutAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser">ResetAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoUser` <a name="PutAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser"></a>

```csharp
private void PutAutoUser(BatchPoolStartTaskUserIdentityAutoUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.putAutoUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---

##### `ResetAutoUser` <a name="ResetAutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetAutoUser"></a>

```csharp
private void ResetAutoUser()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser">AutoUser</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput">AutoUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoUser`<sup>Required</sup> <a name="AutoUser" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUser"></a>

```csharp
public BatchPoolStartTaskUserIdentityAutoUserOutputReference AutoUser { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUserOutputReference">BatchPoolStartTaskUserIdentityAutoUserOutputReference</a>

---

##### `AutoUserInput`<sup>Optional</sup> <a name="AutoUserInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.autoUserInput"></a>

```csharp
public BatchPoolStartTaskUserIdentityAutoUser AutoUserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityAutoUser">BatchPoolStartTaskUserIdentityAutoUser</a>

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentityOutputReference.property.internalValue"></a>

```csharp
public BatchPoolStartTaskUserIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStartTaskUserIdentity">BatchPoolStartTaskUserIdentity</a>

---


### BatchPoolStorageImageReferenceOutputReference <a name="BatchPoolStorageImageReferenceOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolStorageImageReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer">ResetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOffer` <a name="ResetOffer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetOffer"></a>

```csharp
private void ResetOffer()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetPublisher"></a>

```csharp
private void ResetPublisher()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReferenceOutputReference.property.internalValue"></a>

```csharp
public BatchPoolStorageImageReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolStorageImageReference">BatchPoolStorageImageReference</a>

---


### BatchPoolTaskSchedulingPolicyList <a name="BatchPoolTaskSchedulingPolicyList" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolTaskSchedulingPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get"></a>

```csharp
private BatchPoolTaskSchedulingPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolTaskSchedulingPolicyOutputReference <a name="BatchPoolTaskSchedulingPolicyOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolTaskSchedulingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType">ResetNodeFillType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeFillType` <a name="ResetNodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.resetNodeFillType"></a>

```csharp
private void ResetNodeFillType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput">NodeFillTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType">NodeFillType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeFillTypeInput`<sup>Optional</sup> <a name="NodeFillTypeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillTypeInput"></a>

```csharp
public string NodeFillTypeInput { get; }
```

- *Type:* string

---

##### `NodeFillType`<sup>Required</sup> <a name="NodeFillType" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.nodeFillType"></a>

```csharp
public string NodeFillType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTaskSchedulingPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolTimeoutsOutputReference <a name="BatchPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolUserAccountsLinuxUserConfigurationList <a name="BatchPoolUserAccountsLinuxUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsLinuxUserConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get"></a>

```csharp
private BatchPoolUserAccountsLinuxUserConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolUserAccountsLinuxUserConfigurationOutputReference <a name="BatchPoolUserAccountsLinuxUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsLinuxUserConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey">ResetSshPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGid` <a name="ResetGid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetGid"></a>

```csharp
private void ResetGid()
```

##### `ResetSshPrivateKey` <a name="ResetSshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetSshPrivateKey"></a>

```csharp
private void ResetSshPrivateKey()
```

##### `ResetUid` <a name="ResetUid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput">GidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput">SshPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput">UidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid">Gid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey">SshPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid">Uid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gidInput"></a>

```csharp
public double GidInput { get; }
```

- *Type:* double

---

##### `SshPrivateKeyInput`<sup>Optional</sup> <a name="SshPrivateKeyInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKeyInput"></a>

```csharp
public string SshPrivateKeyInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uidInput"></a>

```csharp
public double UidInput { get; }
```

- *Type:* double

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.gid"></a>

```csharp
public double Gid { get; }
```

- *Type:* double

---

##### `SshPrivateKey`<sup>Required</sup> <a name="SshPrivateKey" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.sshPrivateKey"></a>

```csharp
public string SshPrivateKey { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.uid"></a>

```csharp
public double Uid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolUserAccountsList <a name="BatchPoolUserAccountsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get"></a>

```csharp
private BatchPoolUserAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolUserAccountsOutputReference <a name="BatchPoolUserAccountsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration">PutLinuxUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration">PutWindowsUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration">ResetLinuxUserConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration">ResetWindowsUserConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxUserConfiguration` <a name="PutLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration"></a>

```csharp
private void PutLinuxUserConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putLinuxUserConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutWindowsUserConfiguration` <a name="PutWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration"></a>

```csharp
private void PutWindowsUserConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.putWindowsUserConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetLinuxUserConfiguration` <a name="ResetLinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetLinuxUserConfiguration"></a>

```csharp
private void ResetLinuxUserConfiguration()
```

##### `ResetWindowsUserConfiguration` <a name="ResetWindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.resetWindowsUserConfiguration"></a>

```csharp
private void ResetWindowsUserConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration">LinuxUserConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration">WindowsUserConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput">ElevationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput">LinuxUserConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput">WindowsUserConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel">ElevationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxUserConfiguration`<sup>Required</sup> <a name="LinuxUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfiguration"></a>

```csharp
public BatchPoolUserAccountsLinuxUserConfigurationList LinuxUserConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsLinuxUserConfigurationList">BatchPoolUserAccountsLinuxUserConfigurationList</a>

---

##### `WindowsUserConfiguration`<sup>Required</sup> <a name="WindowsUserConfiguration" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfiguration"></a>

```csharp
public BatchPoolUserAccountsWindowsUserConfigurationList WindowsUserConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList">BatchPoolUserAccountsWindowsUserConfigurationList</a>

---

##### `ElevationLevelInput`<sup>Optional</sup> <a name="ElevationLevelInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevelInput"></a>

```csharp
public string ElevationLevelInput { get; }
```

- *Type:* string

---

##### `LinuxUserConfigurationInput`<sup>Optional</sup> <a name="LinuxUserConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.linuxUserConfigurationInput"></a>

```csharp
public object LinuxUserConfigurationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `WindowsUserConfigurationInput`<sup>Optional</sup> <a name="WindowsUserConfigurationInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.windowsUserConfigurationInput"></a>

```csharp
public object WindowsUserConfigurationInput { get; }
```

- *Type:* object

---

##### `ElevationLevel`<sup>Required</sup> <a name="ElevationLevel" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.elevationLevel"></a>

```csharp
public string ElevationLevel { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolUserAccountsWindowsUserConfigurationList <a name="BatchPoolUserAccountsWindowsUserConfigurationList" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsWindowsUserConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get"></a>

```csharp
private BatchPoolUserAccountsWindowsUserConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolUserAccountsWindowsUserConfigurationOutputReference <a name="BatchPoolUserAccountsWindowsUserConfigurationOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolUserAccountsWindowsUserConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput">LoginModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode">LoginMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoginModeInput`<sup>Optional</sup> <a name="LoginModeInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginModeInput"></a>

```csharp
public string LoginModeInput { get; }
```

- *Type:* string

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.loginMode"></a>

```csharp
public string LoginMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolUserAccountsWindowsUserConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolWindowsList <a name="BatchPoolWindowsList" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolWindowsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get"></a>

```csharp
private BatchPoolWindowsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchPoolWindowsOutputReference <a name="BatchPoolWindowsOutputReference" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BatchPoolWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates">ResetEnableAutomaticUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAutomaticUpdates` <a name="ResetEnableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.resetEnableAutomaticUpdates"></a>

```csharp
private void ResetEnableAutomaticUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput">EnableAutomaticUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates">EnableAutomaticUpdates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpdatesInput`<sup>Optional</sup> <a name="EnableAutomaticUpdatesInput" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdatesInput"></a>

```csharp
public object EnableAutomaticUpdatesInput { get; }
```

- *Type:* object

---

##### `EnableAutomaticUpdates`<sup>Required</sup> <a name="EnableAutomaticUpdates" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.enableAutomaticUpdates"></a>

```csharp
public object EnableAutomaticUpdates { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.batchPool.BatchPoolWindowsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



