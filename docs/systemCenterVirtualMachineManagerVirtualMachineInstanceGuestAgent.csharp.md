# `systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent` Submodule <a name="`systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent` Submodule" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent(Construct Scope, string Id, SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetProvisioningAction"></a>

```csharp
private void ResetProvisioningAction()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceIdInput">ScopedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceId">ScopedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningActionInput"></a>

```csharp
public string ProvisioningActionInput { get; }
```

- *Type:* string

---

##### `ScopedResourceIdInput`<sup>Optional</sup> <a name="ScopedResourceIdInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceIdInput"></a>

```csharp
public string ScopedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.timeoutsInput"></a>

```csharp
public IResolvable|SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; }
```

- *Type:* string

---

##### `ScopedResourceId`<sup>Required</sup> <a name="ScopedResourceId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.scopedResourceId"></a>

```csharp
public string ScopedResourceId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Password,
    string ScopedResourceId,
    string Username,
    string Id = null,
    string ProvisioningAction = null,
    SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#password SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#password}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.scopedResourceId">ScopedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#scoped_resource_id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#scoped_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#username SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#username}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#id}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#provisioning_action SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#provisioning_action}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#password SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#password}.

---

##### `ScopedResourceId`<sup>Required</sup> <a name="ScopedResourceId" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.scopedResourceId"></a>

```csharp
public string ScopedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#scoped_resource_id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#scoped_resource_id}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#username SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#provisioning_action SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#provisioning_action}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig.property.timeouts"></a>

```csharp
public SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#timeouts SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#timeouts}

---

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#create SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#create}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#delete SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#read SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#create SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#delete SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#read SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference <a name="SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent.SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts">SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts</a>

---



