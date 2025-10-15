# `containerGroup` Submodule <a name="`containerGroup` Submodule" id="@cdktf/provider-azurerm.containerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerGroup <a name="ContainerGroup" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group azurerm_container_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroup(Construct Scope, string Id, ContainerGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig">ContainerGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig">ContainerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics">PutDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig">PutDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort">PutExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential">PutImageRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer">PutInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics">ResetDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig">ResetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel">ResetDnsNameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy">ResetDnsNameLabelReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort">ResetExposedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential">ResetImageRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer">ResetInitContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId">ResetKeyVaultUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId">ResetNetworkProfileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy">ResetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer"></a>

```csharp
private void PutContainer(IResolvable|ContainerGroupContainer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putContainer.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

---

##### `PutDiagnostics` <a name="PutDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics"></a>

```csharp
private void PutDiagnostics(ContainerGroupDiagnostics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDiagnostics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---

##### `PutDnsConfig` <a name="PutDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig"></a>

```csharp
private void PutDnsConfig(ContainerGroupDnsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---

##### `PutExposedPort` <a name="PutExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort"></a>

```csharp
private void PutExposedPort(IResolvable|ContainerGroupExposedPort[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putExposedPort.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity"></a>

```csharp
private void PutIdentity(ContainerGroupIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---

##### `PutImageRegistryCredential` <a name="PutImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential"></a>

```csharp
private void PutImageRegistryCredential(IResolvable|ContainerGroupImageRegistryCredential[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putImageRegistryCredential.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

---

##### `PutInitContainer` <a name="PutInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer"></a>

```csharp
private void PutInitContainer(IResolvable|ContainerGroupInitContainer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putInitContainer.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---

##### `ResetDiagnostics` <a name="ResetDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDiagnostics"></a>

```csharp
private void ResetDiagnostics()
```

##### `ResetDnsConfig` <a name="ResetDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsConfig"></a>

```csharp
private void ResetDnsConfig()
```

##### `ResetDnsNameLabel` <a name="ResetDnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabel"></a>

```csharp
private void ResetDnsNameLabel()
```

##### `ResetDnsNameLabelReusePolicy` <a name="ResetDnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetDnsNameLabelReusePolicy"></a>

```csharp
private void ResetDnsNameLabelReusePolicy()
```

##### `ResetExposedPort` <a name="ResetExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetExposedPort"></a>

```csharp
private void ResetExposedPort()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetImageRegistryCredential` <a name="ResetImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetImageRegistryCredential"></a>

```csharp
private void ResetImageRegistryCredential()
```

##### `ResetInitContainer` <a name="ResetInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetInitContainer"></a>

```csharp
private void ResetInitContainer()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```

##### `ResetKeyVaultUserAssignedIdentityId` <a name="ResetKeyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetKeyVaultUserAssignedIdentityId"></a>

```csharp
private void ResetKeyVaultUserAssignedIdentityId()
```

##### `ResetNetworkProfileId` <a name="ResetNetworkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetNetworkProfileId"></a>

```csharp
private void ResetNetworkProfileId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetRestartPolicy"></a>

```csharp
private void ResetRestartPolicy()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.resetZones"></a>

```csharp
private void ResetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container">Container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics">Diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort">ExposedPort</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential">ImageRegistryCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer">InitContainer</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput">ContainerInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput">DiagnosticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput">DnsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput">DnsNameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput">DnsNameLabelReusePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput">ExposedPortInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput">ImageRegistryCredentialInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput">InitContainerInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput">KeyVaultUserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput">NetworkProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel">DnsNameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy">DnsNameLabelReusePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId">KeyVaultUserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId">NetworkProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy">RestartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.container"></a>

```csharp
public ContainerGroupContainerList Container { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList">ContainerGroupContainerList</a>

---

##### `Diagnostics`<sup>Required</sup> <a name="Diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnostics"></a>

```csharp
public ContainerGroupDiagnosticsOutputReference Diagnostics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference">ContainerGroupDiagnosticsOutputReference</a>

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfig"></a>

```csharp
public ContainerGroupDnsConfigOutputReference DnsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference">ContainerGroupDnsConfigOutputReference</a>

---

##### `ExposedPort`<sup>Required</sup> <a name="ExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPort"></a>

```csharp
public ContainerGroupExposedPortList ExposedPort { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList">ContainerGroupExposedPortList</a>

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identity"></a>

```csharp
public ContainerGroupIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference">ContainerGroupIdentityOutputReference</a>

---

##### `ImageRegistryCredential`<sup>Required</sup> <a name="ImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredential"></a>

```csharp
public ContainerGroupImageRegistryCredentialList ImageRegistryCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList">ContainerGroupImageRegistryCredentialList</a>

---

##### `InitContainer`<sup>Required</sup> <a name="InitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainer"></a>

```csharp
public ContainerGroupInitContainerList InitContainer { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList">ContainerGroupInitContainerList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeouts"></a>

```csharp
public ContainerGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference">ContainerGroupTimeoutsOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.containerInput"></a>

```csharp
public IResolvable|ContainerGroupContainer[] ContainerInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

---

##### `DiagnosticsInput`<sup>Optional</sup> <a name="DiagnosticsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.diagnosticsInput"></a>

```csharp
public ContainerGroupDiagnostics DiagnosticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---

##### `DnsConfigInput`<sup>Optional</sup> <a name="DnsConfigInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsConfigInput"></a>

```csharp
public ContainerGroupDnsConfig DnsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---

##### `DnsNameLabelInput`<sup>Optional</sup> <a name="DnsNameLabelInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelInput"></a>

```csharp
public string DnsNameLabelInput { get; }
```

- *Type:* string

---

##### `DnsNameLabelReusePolicyInput`<sup>Optional</sup> <a name="DnsNameLabelReusePolicyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicyInput"></a>

```csharp
public string DnsNameLabelReusePolicyInput { get; }
```

- *Type:* string

---

##### `ExposedPortInput`<sup>Optional</sup> <a name="ExposedPortInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.exposedPortInput"></a>

```csharp
public IResolvable|ContainerGroupExposedPort[] ExposedPortInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.identityInput"></a>

```csharp
public ContainerGroupIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageRegistryCredentialInput`<sup>Optional</sup> <a name="ImageRegistryCredentialInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.imageRegistryCredentialInput"></a>

```csharp
public IResolvable|ContainerGroupImageRegistryCredential[] ImageRegistryCredentialInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

---

##### `InitContainerInput`<sup>Optional</sup> <a name="InitContainerInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.initContainerInput"></a>

```csharp
public IResolvable|ContainerGroupInitContainer[] InitContainerInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultUserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityIdInput"></a>

```csharp
public string KeyVaultUserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkProfileIdInput`<sup>Optional</sup> <a name="NetworkProfileIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileIdInput"></a>

```csharp
public string NetworkProfileIdInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicyInput"></a>

```csharp
public string RestartPolicyInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.timeoutsInput"></a>

```csharp
public IResolvable|ContainerGroupTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `DnsNameLabel`<sup>Required</sup> <a name="DnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabel"></a>

```csharp
public string DnsNameLabel { get; }
```

- *Type:* string

---

##### `DnsNameLabelReusePolicy`<sup>Required</sup> <a name="DnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.dnsNameLabelReusePolicy"></a>

```csharp
public string DnsNameLabelReusePolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `KeyVaultUserAssignedIdentityId`<sup>Required</sup> <a name="KeyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.keyVaultUserAssignedIdentityId"></a>

```csharp
public string KeyVaultUserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkProfileId`<sup>Required</sup> <a name="NetworkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.networkProfileId"></a>

```csharp
public string NetworkProfileId { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.restartPolicy"></a>

```csharp
public string RestartPolicy { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerGroupConfig <a name="ContainerGroupConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ContainerGroupContainer[] Container,
    string Location,
    string Name,
    string OsType,
    string ResourceGroupName,
    ContainerGroupDiagnostics Diagnostics = null,
    ContainerGroupDnsConfig DnsConfig = null,
    string DnsNameLabel = null,
    string DnsNameLabelReusePolicy = null,
    IResolvable|ContainerGroupExposedPort[] ExposedPort = null,
    string Id = null,
    ContainerGroupIdentity Identity = null,
    IResolvable|ContainerGroupImageRegistryCredential[] ImageRegistryCredential = null,
    IResolvable|ContainerGroupInitContainer[] InitContainer = null,
    string IpAddressType = null,
    string KeyVaultKeyId = null,
    string KeyVaultUserAssignedIdentityId = null,
    string NetworkProfileId = null,
    string Priority = null,
    string RestartPolicy = null,
    string Sku = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ContainerGroupTimeouts Timeouts = null,
    string[] Zones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container">Container</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#location ContainerGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#os_type ContainerGroup#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics">Diagnostics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | diagnostics block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel">DnsNameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy">DnsNameLabelReusePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort">ExposedPort</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#id ContainerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential">ImageRegistryCredential</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]</code> | image_registry_credential block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer">InitContainer</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]</code> | init_container block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId">KeyVaultUserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId">NetworkProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.priority">Priority</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#priority ContainerGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy">RestartPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#sku ContainerGroup#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#tags ContainerGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#zones ContainerGroup#zones}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.container"></a>

```csharp
public IResolvable|ContainerGroupContainer[] Container { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#container ContainerGroup#container}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#location ContainerGroup#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#os_type ContainerGroup#os_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}.

---

##### `Diagnostics`<sup>Optional</sup> <a name="Diagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.diagnostics"></a>

```csharp
public ContainerGroupDiagnostics Diagnostics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

diagnostics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}

---

##### `DnsConfig`<sup>Optional</sup> <a name="DnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsConfig"></a>

```csharp
public ContainerGroupDnsConfig DnsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#dns_config ContainerGroup#dns_config}

---

##### `DnsNameLabel`<sup>Optional</sup> <a name="DnsNameLabel" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabel"></a>

```csharp
public string DnsNameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}.

---

##### `DnsNameLabelReusePolicy`<sup>Optional</sup> <a name="DnsNameLabelReusePolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.dnsNameLabelReusePolicy"></a>

```csharp
public string DnsNameLabelReusePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}.

---

##### `ExposedPort`<sup>Optional</sup> <a name="ExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.exposedPort"></a>

```csharp
public IResolvable|ContainerGroupExposedPort[] ExposedPort { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#id ContainerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.identity"></a>

```csharp
public ContainerGroupIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#identity ContainerGroup#identity}

---

##### `ImageRegistryCredential`<sup>Optional</sup> <a name="ImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.imageRegistryCredential"></a>

```csharp
public IResolvable|ContainerGroupImageRegistryCredential[] ImageRegistryCredential { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

image_registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}

---

##### `InitContainer`<sup>Optional</sup> <a name="InitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.initContainer"></a>

```csharp
public IResolvable|ContainerGroupInitContainer[] InitContainer { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

init_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#init_container ContainerGroup#init_container}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}.

---

##### `KeyVaultUserAssignedIdentityId`<sup>Optional</sup> <a name="KeyVaultUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.keyVaultUserAssignedIdentityId"></a>

```csharp
public string KeyVaultUserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}.

---

##### `NetworkProfileId`<sup>Optional</sup> <a name="NetworkProfileId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.networkProfileId"></a>

```csharp
public string NetworkProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#priority ContainerGroup#priority}.

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.restartPolicy"></a>

```csharp
public string RestartPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#sku ContainerGroup#sku}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#tags ContainerGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.timeouts"></a>

```csharp
public ContainerGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#timeouts ContainerGroup#timeouts}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#zones ContainerGroup#zones}.

---

### ContainerGroupContainer <a name="ContainerGroupContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainer {
    double Cpu,
    string Image,
    double Memory,
    string Name,
    string[] Commands = null,
    double CpuLimit = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    ContainerGroupContainerLivenessProbe LivenessProbe = null,
    double MemoryLimit = null,
    IResolvable|ContainerGroupContainerPorts[] Ports = null,
    ContainerGroupContainerReadinessProbe ReadinessProbe = null,
    System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariables = null,
    IResolvable|ContainerGroupContainerSecurity[] Security = null,
    IResolvable|ContainerGroupContainerVolume[] Volume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu">Cpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#cpu ContainerGroup#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory">Memory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#memory ContainerGroup#memory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands">Commands</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports">Ports</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe">ReadinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables">SecureEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security">Security</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]</code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume">Volume</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]</code> | volume block. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpu"></a>

```csharp
public double Cpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#cpu ContainerGroup#cpu}.

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#image ContainerGroup#image}.

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#memory ContainerGroup#memory}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `Commands`<sup>Optional</sup> <a name="Commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.commands"></a>

```csharp
public string[] Commands { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.livenessProbe"></a>

```csharp
public ContainerGroupContainerLivenessProbe LivenessProbe { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#liveness_probe ContainerGroup#liveness_probe}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}.

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.ports"></a>

```csharp
public IResolvable|ContainerGroupContainerPorts[] Ports { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#ports ContainerGroup#ports}

---

##### `ReadinessProbe`<sup>Optional</sup> <a name="ReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.readinessProbe"></a>

```csharp
public ContainerGroupContainerReadinessProbe ReadinessProbe { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#readiness_probe ContainerGroup#readiness_probe}

---

##### `SecureEnvironmentVariables`<sup>Optional</sup> <a name="SecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.secureEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.security"></a>

```csharp
public IResolvable|ContainerGroupContainerSecurity[] Security { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#security ContainerGroup#security}

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer.property.volume"></a>

```csharp
public IResolvable|ContainerGroupContainerVolume[] Volume { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupContainerLivenessProbe <a name="ContainerGroupContainerLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerLivenessProbe {
    string[] Exec = null,
    double FailureThreshold = null,
    IResolvable|ContainerGroupContainerLivenessProbeHttpGet[] HttpGet = null,
    double InitialDelaySeconds = null,
    double PeriodSeconds = null,
    double SuccessThreshold = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec">Exec</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet">HttpGet</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]</code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.exec"></a>

```csharp
public string[] Exec { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.httpGet"></a>

```csharp
public IResolvable|ContainerGroupContainerLivenessProbeHttpGet[] HttpGet { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerLivenessProbeHttpGet <a name="ContainerGroupContainerLivenessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerLivenessProbeHttpGet {
    System.Collections.Generic.IDictionary<string, string> HttpHeaders = null,
    string Path = null,
    double Port = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#path ContainerGroup#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerPorts <a name="ContainerGroupContainerPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerPorts {
    double Port = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupContainerReadinessProbe <a name="ContainerGroupContainerReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerReadinessProbe {
    string[] Exec = null,
    double FailureThreshold = null,
    IResolvable|ContainerGroupContainerReadinessProbeHttpGet[] HttpGet = null,
    double InitialDelaySeconds = null,
    double PeriodSeconds = null,
    double SuccessThreshold = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec">Exec</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#exec ContainerGroup#exec}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet">HttpGet</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]</code> | http_get block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.exec"></a>

```csharp
public string[] Exec { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#exec ContainerGroup#exec}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}.

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.httpGet"></a>

```csharp
public IResolvable|ContainerGroupContainerReadinessProbeHttpGet[] HttpGet { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#http_get ContainerGroup#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}.

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}.

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}.

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}.

---

### ContainerGroupContainerReadinessProbeHttpGet <a name="ContainerGroupContainerReadinessProbeHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerReadinessProbeHttpGet {
    System.Collections.Generic.IDictionary<string, string> HttpHeaders = null,
    string Path = null,
    double Port = null,
    string Scheme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#path ContainerGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#scheme ContainerGroup#scheme}. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#path ContainerGroup#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#scheme ContainerGroup#scheme}.

---

### ContainerGroupContainerSecurity <a name="ContainerGroupContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerSecurity {
    bool|IResolvable PrivilegeEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled">PrivilegeEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `PrivilegeEnabled`<sup>Required</sup> <a name="PrivilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity.property.privilegeEnabled"></a>

```csharp
public bool|IResolvable PrivilegeEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupContainerVolume <a name="ContainerGroupContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerVolume {
    string MountPath,
    string Name,
    bool|IResolvable EmptyDir = null,
    ContainerGroupContainerVolumeGitRepo GitRepo = null,
    bool|IResolvable ReadOnly = null,
    System.Collections.Generic.IDictionary<string, string> Secret = null,
    string ShareName = null,
    string StorageAccountKey = null,
    string StorageAccountName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath">MountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir">EmptyDir</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo">GitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly">ReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret">Secret</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName">ShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.emptyDir"></a>

```csharp
public bool|IResolvable EmptyDir { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `GitRepo`<sup>Optional</sup> <a name="GitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.gitRepo"></a>

```csharp
public ContainerGroupContainerVolumeGitRepo GitRepo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.secret"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secret { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `StorageAccountKey`<sup>Optional</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `StorageAccountName`<sup>Optional</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupContainerVolumeGitRepo <a name="ContainerGroupContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerVolumeGitRepo {
    string Url,
    string Directory = null,
    string Revision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory">Directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision">Revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#url ContainerGroup#url}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupDiagnostics <a name="ContainerGroupDiagnostics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupDiagnostics {
    ContainerGroupDiagnosticsLogAnalytics LogAnalytics
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics">LogAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | log_analytics block. |

---

##### `LogAnalytics`<sup>Required</sup> <a name="LogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics.property.logAnalytics"></a>

```csharp
public ContainerGroupDiagnosticsLogAnalytics LogAnalytics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

log_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#log_analytics ContainerGroup#log_analytics}

---

### ContainerGroupDiagnosticsLogAnalytics <a name="ContainerGroupDiagnosticsLogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupDiagnosticsLogAnalytics {
    string WorkspaceId,
    string WorkspaceKey,
    string LogType = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey">WorkspaceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType">LogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#log_type ContainerGroup#log_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#metadata ContainerGroup#metadata}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}.

---

##### `WorkspaceKey`<sup>Required</sup> <a name="WorkspaceKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.workspaceKey"></a>

```csharp
public string WorkspaceKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}.

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#log_type ContainerGroup#log_type}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#metadata ContainerGroup#metadata}.

---

### ContainerGroupDnsConfig <a name="ContainerGroupDnsConfig" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupDnsConfig {
    string[] Nameservers,
    string[] Options = null,
    string[] SearchDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers">Nameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options">Options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#options ContainerGroup#options}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains">SearchDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}. |

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.nameservers"></a>

```csharp
public string[] Nameservers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#options ContainerGroup#options}.

---

##### `SearchDomains`<sup>Optional</sup> <a name="SearchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig.property.searchDomains"></a>

```csharp
public string[] SearchDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}.

---

### ContainerGroupExposedPort <a name="ContainerGroupExposedPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupExposedPort {
    double Port = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#protocol ContainerGroup#protocol}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#port ContainerGroup#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#protocol ContainerGroup#protocol}.

---

### ContainerGroupIdentity <a name="ContainerGroupIdentity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#type ContainerGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#type ContainerGroup#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}.

---

### ContainerGroupImageRegistryCredential <a name="ContainerGroupImageRegistryCredential" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupImageRegistryCredential {
    string Server,
    string Password = null,
    string UserAssignedIdentityId = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#server ContainerGroup#server}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#password ContainerGroup#password}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | The User Assigned Identity to use for Container Registry access. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#username ContainerGroup#username}. |

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#server ContainerGroup#server}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#password ContainerGroup#password}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

The User Assigned Identity to use for Container Registry access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#user_assigned_identity_id ContainerGroup#user_assigned_identity_id}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#username ContainerGroup#username}.

---

### ContainerGroupInitContainer <a name="ContainerGroupInitContainer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainer {
    string Image,
    string Name,
    string[] Commands = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariables = null,
    IResolvable|ContainerGroupInitContainerSecurity[] Security = null,
    IResolvable|ContainerGroupInitContainerVolume[] Volume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#image ContainerGroup#image}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands">Commands</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#commands ContainerGroup#commands}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables">SecureEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security">Security</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]</code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume">Volume</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]</code> | volume block. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#image ContainerGroup#image}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `Commands`<sup>Optional</sup> <a name="Commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.commands"></a>

```csharp
public string[] Commands { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#commands ContainerGroup#commands}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}.

---

##### `SecureEnvironmentVariables`<sup>Optional</sup> <a name="SecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.secureEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}.

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.security"></a>

```csharp
public IResolvable|ContainerGroupInitContainerSecurity[] Security { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#security ContainerGroup#security}

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer.property.volume"></a>

```csharp
public IResolvable|ContainerGroupInitContainerVolume[] Volume { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#volume ContainerGroup#volume}

---

### ContainerGroupInitContainerSecurity <a name="ContainerGroupInitContainerSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerSecurity {
    bool|IResolvable PrivilegeEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled">PrivilegeEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}. |

---

##### `PrivilegeEnabled`<sup>Required</sup> <a name="PrivilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity.property.privilegeEnabled"></a>

```csharp
public bool|IResolvable PrivilegeEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}.

---

### ContainerGroupInitContainerVolume <a name="ContainerGroupInitContainerVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerVolume {
    string MountPath,
    string Name,
    bool|IResolvable EmptyDir = null,
    ContainerGroupInitContainerVolumeGitRepo GitRepo = null,
    bool|IResolvable ReadOnly = null,
    System.Collections.Generic.IDictionary<string, string> Secret = null,
    string ShareName = null,
    string StorageAccountKey = null,
    string StorageAccountName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath">MountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir">EmptyDir</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo">GitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | git_repo block. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly">ReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#read_only ContainerGroup#read_only}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret">Secret</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secret ContainerGroup#secret}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName">ShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#share_name ContainerGroup#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#name ContainerGroup#name}.

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.emptyDir"></a>

```csharp
public bool|IResolvable EmptyDir { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}.

---

##### `GitRepo`<sup>Optional</sup> <a name="GitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.gitRepo"></a>

```csharp
public ContainerGroupInitContainerVolumeGitRepo GitRepo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

git_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#read_only ContainerGroup#read_only}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.secret"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secret { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#secret ContainerGroup#secret}.

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#share_name ContainerGroup#share_name}.

---

##### `StorageAccountKey`<sup>Optional</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}.

---

##### `StorageAccountName`<sup>Optional</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}.

---

### ContainerGroupInitContainerVolumeGitRepo <a name="ContainerGroupInitContainerVolumeGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerVolumeGitRepo {
    string Url,
    string Directory = null,
    string Revision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#url ContainerGroup#url}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory">Directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#directory ContainerGroup#directory}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision">Revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#revision ContainerGroup#revision}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#url ContainerGroup#url}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#directory ContainerGroup#directory}.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#revision ContainerGroup#revision}.

---

### ContainerGroupTimeouts <a name="ContainerGroupTimeouts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#create ContainerGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#delete ContainerGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#read ContainerGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#update ContainerGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#create ContainerGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#delete ContainerGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#read ContainerGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/container_group#update ContainerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerGroupContainerList <a name="ContainerGroupContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get"></a>

```csharp
private ContainerGroupContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainer[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>[]

---


### ContainerGroupContainerLivenessProbeHttpGetList <a name="ContainerGroupContainerLivenessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerLivenessProbeHttpGetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get"></a>

```csharp
private ContainerGroupContainerLivenessProbeHttpGetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerLivenessProbeHttpGet[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

---


### ContainerGroupContainerLivenessProbeHttpGetOutputReference <a name="ContainerGroupContainerLivenessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerLivenessProbeHttpGetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerLivenessProbeHttpGet InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>

---


### ContainerGroupContainerLivenessProbeOutputReference <a name="ContainerGroupContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerLivenessProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet"></a>

```csharp
private void PutHttpGet(IResolvable|ContainerGroupContainerLivenessProbeHttpGet[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

---

##### `ResetExec` <a name="ResetExec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetExec"></a>

```csharp
private void ResetExec()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetHttpGet"></a>

```csharp
private void ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```csharp
private void ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetSuccessThreshold"></a>

```csharp
private void ResetSuccessThreshold()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput">ExecInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec">Exec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGet"></a>

```csharp
public ContainerGroupContainerLivenessProbeHttpGetList HttpGet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGetList">ContainerGroupContainerLivenessProbeHttpGetList</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.execInput"></a>

```csharp
public string[] ExecInput { get; }
```

- *Type:* string[]

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.httpGetInput"></a>

```csharp
public IResolvable|ContainerGroupContainerLivenessProbeHttpGet[] HttpGetInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeHttpGet">ContainerGroupContainerLivenessProbeHttpGet</a>[]

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```csharp
public double InitialDelaySecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThresholdInput"></a>

```csharp
public double SuccessThresholdInput { get; }
```

- *Type:* double

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.exec"></a>

```csharp
public string[] Exec { get; }
```

- *Type:* string[]

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupContainerLivenessProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---


### ContainerGroupContainerOutputReference <a name="ContainerGroupContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe">PutReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands">ResetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit">ResetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit">ResetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe">ResetReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables">ResetSecureEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe"></a>

```csharp
private void PutLivenessProbe(ContainerGroupContainerLivenessProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts"></a>

```csharp
private void PutPorts(IResolvable|ContainerGroupContainerPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putPorts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

---

##### `PutReadinessProbe` <a name="PutReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe"></a>

```csharp
private void PutReadinessProbe(ContainerGroupContainerReadinessProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity"></a>

```csharp
private void PutSecurity(IResolvable|ContainerGroupContainerSecurity[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume"></a>

```csharp
private void PutVolume(IResolvable|ContainerGroupContainerVolume[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

---

##### `ResetCommands` <a name="ResetCommands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCommands"></a>

```csharp
private void ResetCommands()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetCpuLimit"></a>

```csharp
private void ResetCpuLimit()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetLivenessProbe"></a>

```csharp
private void ResetLivenessProbe()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetMemoryLimit"></a>

```csharp
private void ResetMemoryLimit()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetReadinessProbe` <a name="ResetReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetReadinessProbe"></a>

```csharp
private void ResetReadinessProbe()
```

##### `ResetSecureEnvironmentVariables` <a name="ResetSecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecureEnvironmentVariables"></a>

```csharp
private void ResetSecureEnvironmentVariables()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetSecurity"></a>

```csharp
private void ResetSecurity()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.resetVolume"></a>

```csharp
private void ResetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe">ReadinessProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput">CommandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput">CpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput">CpuLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput">PortsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput">ReadinessProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput">SecureEnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput">SecurityInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput">VolumeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands">Commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables">SecureEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbe"></a>

```csharp
public ContainerGroupContainerLivenessProbeOutputReference LivenessProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbeOutputReference">ContainerGroupContainerLivenessProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.ports"></a>

```csharp
public ContainerGroupContainerPortsList Ports { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList">ContainerGroupContainerPortsList</a>

---

##### `ReadinessProbe`<sup>Required</sup> <a name="ReadinessProbe" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbe"></a>

```csharp
public ContainerGroupContainerReadinessProbeOutputReference ReadinessProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference">ContainerGroupContainerReadinessProbeOutputReference</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.security"></a>

```csharp
public ContainerGroupContainerSecurityList Security { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList">ContainerGroupContainerSecurityList</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volume"></a>

```csharp
public ContainerGroupContainerVolumeList Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList">ContainerGroupContainerVolumeList</a>

---

##### `CommandsInput`<sup>Optional</sup> <a name="CommandsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commandsInput"></a>

```csharp
public string[] CommandsInput { get; }
```

- *Type:* string[]

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuInput"></a>

```csharp
public double CpuInput { get; }
```

- *Type:* double

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimitInput"></a>

```csharp
public double CpuLimitInput { get; }
```

- *Type:* double

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.livenessProbeInput"></a>

```csharp
public ContainerGroupContainerLivenessProbe LivenessProbeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerLivenessProbe">ContainerGroupContainerLivenessProbe</a>

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimitInput"></a>

```csharp
public double MemoryLimitInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.portsInput"></a>

```csharp
public IResolvable|ContainerGroupContainerPorts[] PortsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

---

##### `ReadinessProbeInput`<sup>Optional</sup> <a name="ReadinessProbeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.readinessProbeInput"></a>

```csharp
public ContainerGroupContainerReadinessProbe ReadinessProbeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---

##### `SecureEnvironmentVariablesInput`<sup>Optional</sup> <a name="SecureEnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.securityInput"></a>

```csharp
public IResolvable|ContainerGroupContainerSecurity[] SecurityInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.volumeInput"></a>

```csharp
public IResolvable|ContainerGroupContainerVolume[] VolumeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.commands"></a>

```csharp
public string[] Commands { get; }
```

- *Type:* string[]

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; }
```

- *Type:* double

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecureEnvironmentVariables`<sup>Required</sup> <a name="SecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.secureEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainer InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainer">ContainerGroupContainer</a>

---


### ContainerGroupContainerPortsList <a name="ContainerGroupContainerPortsList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get"></a>

```csharp
private ContainerGroupContainerPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerPorts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>[]

---


### ContainerGroupContainerPortsOutputReference <a name="ContainerGroupContainerPortsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerPorts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerPorts">ContainerGroupContainerPorts</a>

---


### ContainerGroupContainerReadinessProbeHttpGetList <a name="ContainerGroupContainerReadinessProbeHttpGetList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerReadinessProbeHttpGetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get"></a>

```csharp
private ContainerGroupContainerReadinessProbeHttpGetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerReadinessProbeHttpGet[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

---


### ContainerGroupContainerReadinessProbeHttpGetOutputReference <a name="ContainerGroupContainerReadinessProbeHttpGetOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerReadinessProbeHttpGetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerReadinessProbeHttpGet InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>

---


### ContainerGroupContainerReadinessProbeOutputReference <a name="ContainerGroupContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerReadinessProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet"></a>

```csharp
private void PutHttpGet(IResolvable|ContainerGroupContainerReadinessProbeHttpGet[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

---

##### `ResetExec` <a name="ResetExec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetExec"></a>

```csharp
private void ResetExec()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetHttpGet"></a>

```csharp
private void ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetInitialDelaySeconds"></a>

```csharp
private void ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetSuccessThreshold"></a>

```csharp
private void ResetSuccessThreshold()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput">ExecInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec">Exec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGet"></a>

```csharp
public ContainerGroupContainerReadinessProbeHttpGetList HttpGet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGetList">ContainerGroupContainerReadinessProbeHttpGetList</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.execInput"></a>

```csharp
public string[] ExecInput { get; }
```

- *Type:* string[]

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.httpGetInput"></a>

```csharp
public IResolvable|ContainerGroupContainerReadinessProbeHttpGet[] HttpGetInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeHttpGet">ContainerGroupContainerReadinessProbeHttpGet</a>[]

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySecondsInput"></a>

```csharp
public double InitialDelaySecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThresholdInput"></a>

```csharp
public double SuccessThresholdInput { get; }
```

- *Type:* double

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.exec"></a>

```csharp
public string[] Exec { get; }
```

- *Type:* string[]

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbeOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupContainerReadinessProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerReadinessProbe">ContainerGroupContainerReadinessProbe</a>

---


### ContainerGroupContainerSecurityList <a name="ContainerGroupContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerSecurityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get"></a>

```csharp
private ContainerGroupContainerSecurityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerSecurity[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>[]

---


### ContainerGroupContainerSecurityOutputReference <a name="ContainerGroupContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput">PrivilegeEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled">PrivilegeEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivilegeEnabledInput`<sup>Optional</sup> <a name="PrivilegeEnabledInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```csharp
public bool|IResolvable PrivilegeEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PrivilegeEnabled`<sup>Required</sup> <a name="PrivilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.privilegeEnabled"></a>

```csharp
public bool|IResolvable PrivilegeEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerSecurity InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerSecurity">ContainerGroupContainerSecurity</a>

---


### ContainerGroupContainerVolumeGitRepoOutputReference <a name="ContainerGroupContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerVolumeGitRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupContainerVolumeGitRepo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---


### ContainerGroupContainerVolumeList <a name="ContainerGroupContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get"></a>

```csharp
private ContainerGroupContainerVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerVolume[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>[]

---


### ContainerGroupContainerVolumeOutputReference <a name="ContainerGroupContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupContainerVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo">PutGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo">ResetGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey">ResetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName">ResetStorageAccountName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitRepo` <a name="PutGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo"></a>

```csharp
private void PutGitRepo(ContainerGroupContainerVolumeGitRepo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.putGitRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetEmptyDir"></a>

```csharp
private void ResetEmptyDir()
```

##### `ResetGitRepo` <a name="ResetGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetGitRepo"></a>

```csharp
private void ResetGitRepo()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetShareName"></a>

```csharp
private void ResetShareName()
```

##### `ResetStorageAccountKey` <a name="ResetStorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountKey"></a>

```csharp
private void ResetStorageAccountKey()
```

##### `ResetStorageAccountName` <a name="ResetStorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.resetStorageAccountName"></a>

```csharp
private void ResetStorageAccountName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo">GitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput">GitRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput">SecretInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir">EmptyDir</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret">Secret</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepo"></a>

```csharp
public ContainerGroupContainerVolumeGitRepoOutputReference GitRepo { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepoOutputReference">ContainerGroupContainerVolumeGitRepoOutputReference</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDirInput"></a>

```csharp
public bool|IResolvable EmptyDirInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `GitRepoInput`<sup>Optional</sup> <a name="GitRepoInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.gitRepoInput"></a>

```csharp
public ContainerGroupContainerVolumeGitRepo GitRepoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeGitRepo">ContainerGroupContainerVolumeGitRepo</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secretInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.emptyDir"></a>

```csharp
public bool|IResolvable EmptyDir { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.secret"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secret { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolumeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupContainerVolume InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupContainerVolume">ContainerGroupContainerVolume</a>

---


### ContainerGroupDiagnosticsLogAnalyticsOutputReference <a name="ContainerGroupDiagnosticsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupDiagnosticsLogAnalyticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogType` <a name="ResetLogType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput">WorkspaceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey">WorkspaceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceKeyInput`<sup>Optional</sup> <a name="WorkspaceKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKeyInput"></a>

```csharp
public string WorkspaceKeyInput { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `WorkspaceKey`<sup>Required</sup> <a name="WorkspaceKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.workspaceKey"></a>

```csharp
public string WorkspaceKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupDiagnosticsLogAnalytics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---


### ContainerGroupDiagnosticsOutputReference <a name="ContainerGroupDiagnosticsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupDiagnosticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics">PutLogAnalytics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogAnalytics` <a name="PutLogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics"></a>

```csharp
private void PutLogAnalytics(ContainerGroupDiagnosticsLogAnalytics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.putLogAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics">LogAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput">LogAnalyticsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAnalytics`<sup>Required</sup> <a name="LogAnalytics" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalytics"></a>

```csharp
public ContainerGroupDiagnosticsLogAnalyticsOutputReference LogAnalytics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalyticsOutputReference">ContainerGroupDiagnosticsLogAnalyticsOutputReference</a>

---

##### `LogAnalyticsInput`<sup>Optional</sup> <a name="LogAnalyticsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.logAnalyticsInput"></a>

```csharp
public ContainerGroupDiagnosticsLogAnalytics LogAnalyticsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsLogAnalytics">ContainerGroupDiagnosticsLogAnalytics</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnosticsOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupDiagnostics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDiagnostics">ContainerGroupDiagnostics</a>

---


### ContainerGroupDnsConfigOutputReference <a name="ContainerGroupDnsConfigOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupDnsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains">ResetSearchDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetSearchDomains` <a name="ResetSearchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.resetSearchDomains"></a>

```csharp
private void ResetSearchDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput">SearchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers">Nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains">SearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameserversInput"></a>

```csharp
public string[] NameserversInput { get; }
```

- *Type:* string[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `SearchDomainsInput`<sup>Optional</sup> <a name="SearchDomainsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomainsInput"></a>

```csharp
public string[] SearchDomainsInput { get; }
```

- *Type:* string[]

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.nameservers"></a>

```csharp
public string[] Nameservers { get; }
```

- *Type:* string[]

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.searchDomains"></a>

```csharp
public string[] SearchDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupDnsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupDnsConfig">ContainerGroupDnsConfig</a>

---


### ContainerGroupExposedPortList <a name="ContainerGroupExposedPortList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupExposedPortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get"></a>

```csharp
private ContainerGroupExposedPortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupExposedPort[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>[]

---


### ContainerGroupExposedPortOutputReference <a name="ContainerGroupExposedPortOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupExposedPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPortOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupExposedPort InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupExposedPort">ContainerGroupExposedPort</a>

---


### ContainerGroupIdentityOutputReference <a name="ContainerGroupIdentityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentityOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupIdentity">ContainerGroupIdentity</a>

---


### ContainerGroupImageRegistryCredentialList <a name="ContainerGroupImageRegistryCredentialList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupImageRegistryCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get"></a>

```csharp
private ContainerGroupImageRegistryCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupImageRegistryCredential[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>[]

---


### ContainerGroupImageRegistryCredentialOutputReference <a name="ContainerGroupImageRegistryCredentialOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupImageRegistryCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupImageRegistryCredential InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupImageRegistryCredential">ContainerGroupImageRegistryCredential</a>

---


### ContainerGroupInitContainerList <a name="ContainerGroupInitContainerList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get"></a>

```csharp
private ContainerGroupInitContainerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupInitContainer[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>[]

---


### ContainerGroupInitContainerOutputReference <a name="ContainerGroupInitContainerOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands">ResetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables">ResetSecureEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity"></a>

```csharp
private void PutSecurity(IResolvable|ContainerGroupInitContainerSecurity[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putSecurity.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume"></a>

```csharp
private void PutVolume(IResolvable|ContainerGroupInitContainerVolume[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.putVolume.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

---

##### `ResetCommands` <a name="ResetCommands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetCommands"></a>

```csharp
private void ResetCommands()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetSecureEnvironmentVariables` <a name="ResetSecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecureEnvironmentVariables"></a>

```csharp
private void ResetSecureEnvironmentVariables()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetSecurity"></a>

```csharp
private void ResetSecurity()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.resetVolume"></a>

```csharp
private void ResetVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput">CommandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput">SecureEnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput">SecurityInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput">VolumeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands">Commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables">SecureEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.security"></a>

```csharp
public ContainerGroupInitContainerSecurityList Security { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList">ContainerGroupInitContainerSecurityList</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volume"></a>

```csharp
public ContainerGroupInitContainerVolumeList Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList">ContainerGroupInitContainerVolumeList</a>

---

##### `CommandsInput`<sup>Optional</sup> <a name="CommandsInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commandsInput"></a>

```csharp
public string[] CommandsInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecureEnvironmentVariablesInput`<sup>Optional</sup> <a name="SecureEnvironmentVariablesInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.securityInput"></a>

```csharp
public IResolvable|ContainerGroupInitContainerSecurity[] SecurityInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.volumeInput"></a>

```csharp
public IResolvable|ContainerGroupInitContainerVolume[] VolumeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.commands"></a>

```csharp
public string[] Commands { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecureEnvironmentVariables`<sup>Required</sup> <a name="SecureEnvironmentVariables" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.secureEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecureEnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupInitContainer InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainer">ContainerGroupInitContainer</a>

---


### ContainerGroupInitContainerSecurityList <a name="ContainerGroupInitContainerSecurityList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerSecurityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get"></a>

```csharp
private ContainerGroupInitContainerSecurityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupInitContainerSecurity[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>[]

---


### ContainerGroupInitContainerSecurityOutputReference <a name="ContainerGroupInitContainerSecurityOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput">PrivilegeEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled">PrivilegeEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivilegeEnabledInput`<sup>Optional</sup> <a name="PrivilegeEnabledInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabledInput"></a>

```csharp
public bool|IResolvable PrivilegeEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PrivilegeEnabled`<sup>Required</sup> <a name="PrivilegeEnabled" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.privilegeEnabled"></a>

```csharp
public bool|IResolvable PrivilegeEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupInitContainerSecurity InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerSecurity">ContainerGroupInitContainerSecurity</a>

---


### ContainerGroupInitContainerVolumeGitRepoOutputReference <a name="ContainerGroupInitContainerVolumeGitRepoOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerVolumeGitRepoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference.property.internalValue"></a>

```csharp
public ContainerGroupInitContainerVolumeGitRepo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---


### ContainerGroupInitContainerVolumeList <a name="ContainerGroupInitContainerVolumeList" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get"></a>

```csharp
private ContainerGroupInitContainerVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeList.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupInitContainerVolume[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>[]

---


### ContainerGroupInitContainerVolumeOutputReference <a name="ContainerGroupInitContainerVolumeOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupInitContainerVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo">PutGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo">ResetGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey">ResetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName">ResetStorageAccountName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitRepo` <a name="PutGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo"></a>

```csharp
private void PutGitRepo(ContainerGroupInitContainerVolumeGitRepo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.putGitRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetEmptyDir"></a>

```csharp
private void ResetEmptyDir()
```

##### `ResetGitRepo` <a name="ResetGitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetGitRepo"></a>

```csharp
private void ResetGitRepo()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetShareName"></a>

```csharp
private void ResetShareName()
```

##### `ResetStorageAccountKey` <a name="ResetStorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountKey"></a>

```csharp
private void ResetStorageAccountKey()
```

##### `ResetStorageAccountName` <a name="ResetStorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.resetStorageAccountName"></a>

```csharp
private void ResetStorageAccountName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo">GitRepo</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput">GitRepoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput">SecretInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir">EmptyDir</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret">Secret</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepo"></a>

```csharp
public ContainerGroupInitContainerVolumeGitRepoOutputReference GitRepo { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepoOutputReference">ContainerGroupInitContainerVolumeGitRepoOutputReference</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDirInput"></a>

```csharp
public bool|IResolvable EmptyDirInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `GitRepoInput`<sup>Optional</sup> <a name="GitRepoInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.gitRepoInput"></a>

```csharp
public ContainerGroupInitContainerVolumeGitRepo GitRepoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeGitRepo">ContainerGroupInitContainerVolumeGitRepo</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secretInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.emptyDir"></a>

```csharp
public bool|IResolvable EmptyDir { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.secret"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secret { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolumeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupInitContainerVolume InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupInitContainerVolume">ContainerGroupInitContainerVolume</a>

---


### ContainerGroupTimeoutsOutputReference <a name="ContainerGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerGroupTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.containerGroup.ContainerGroupTimeouts">ContainerGroupTimeouts</a>

---



