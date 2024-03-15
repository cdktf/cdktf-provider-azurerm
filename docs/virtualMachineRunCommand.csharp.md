# `virtualMachineRunCommand` Submodule <a name="`virtualMachineRunCommand` Submodule" id="@cdktf/provider-azurerm.virtualMachineRunCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineRunCommand <a name="VirtualMachineRunCommand" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command azurerm_virtual_machine_run_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommand(Construct Scope, string Id, VirtualMachineRunCommandConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig">VirtualMachineRunCommandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig">VirtualMachineRunCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity">PutErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity">PutOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter">PutProtectedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity">ResetErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri">ResetErrorBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity">ResetOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri">ResetOutputBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter">ResetProtectedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword">ResetRunAsPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser">ResetRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorBlobManagedIdentity` <a name="PutErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity"></a>

```csharp
private void PutErrorBlobManagedIdentity(VirtualMachineRunCommandErrorBlobManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---

##### `PutOutputBlobManagedIdentity` <a name="PutOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity"></a>

```csharp
private void PutOutputBlobManagedIdentity(VirtualMachineRunCommandOutputBlobManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter.parameter.value"></a>

- *Type:* object

---

##### `PutProtectedParameter` <a name="PutProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter"></a>

```csharp
private void PutProtectedParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource"></a>

```csharp
private void PutSource(VirtualMachineRunCommandSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualMachineRunCommandTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

---

##### `ResetErrorBlobManagedIdentity` <a name="ResetErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity"></a>

```csharp
private void ResetErrorBlobManagedIdentity()
```

##### `ResetErrorBlobUri` <a name="ResetErrorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri"></a>

```csharp
private void ResetErrorBlobUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOutputBlobManagedIdentity` <a name="ResetOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity"></a>

```csharp
private void ResetOutputBlobManagedIdentity()
```

##### `ResetOutputBlobUri` <a name="ResetOutputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri"></a>

```csharp
private void ResetOutputBlobUri()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetProtectedParameter` <a name="ResetProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter"></a>

```csharp
private void ResetProtectedParameter()
```

##### `ResetRunAsPassword` <a name="ResetRunAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword"></a>

```csharp
private void ResetRunAsPassword()
```

##### `ResetRunAsUser` <a name="ResetRunAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser"></a>

```csharp
private void ResetRunAsUser()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineRunCommand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineRunCommand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineRunCommand.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualMachineRunCommand.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineRunCommand to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineRunCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineRunCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity">ErrorBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView">InstanceView</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity">OutputBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter">ProtectedParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput">ErrorBlobManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput">ErrorBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput">OutputBlobManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput">OutputBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput">ProtectedParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput">RunAsPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput">RunAsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri">ErrorBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri">OutputBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword">RunAsPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser">RunAsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ErrorBlobManagedIdentity`<sup>Required</sup> <a name="ErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity"></a>

```csharp
public VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference ErrorBlobManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a>

---

##### `InstanceView`<sup>Required</sup> <a name="InstanceView" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView"></a>

```csharp
public VirtualMachineRunCommandInstanceViewList InstanceView { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a>

---

##### `OutputBlobManagedIdentity`<sup>Required</sup> <a name="OutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity"></a>

```csharp
public VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference OutputBlobManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter"></a>

```csharp
public VirtualMachineRunCommandParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a>

---

##### `ProtectedParameter`<sup>Required</sup> <a name="ProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter"></a>

```csharp
public VirtualMachineRunCommandProtectedParameterList ProtectedParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source"></a>

```csharp
public VirtualMachineRunCommandSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts"></a>

```csharp
public VirtualMachineRunCommandTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a>

---

##### `ErrorBlobManagedIdentityInput`<sup>Optional</sup> <a name="ErrorBlobManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput"></a>

```csharp
public VirtualMachineRunCommandErrorBlobManagedIdentity ErrorBlobManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---

##### `ErrorBlobUriInput`<sup>Optional</sup> <a name="ErrorBlobUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput"></a>

```csharp
public string ErrorBlobUriInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputBlobManagedIdentityInput`<sup>Optional</sup> <a name="OutputBlobManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput"></a>

```csharp
public VirtualMachineRunCommandOutputBlobManagedIdentity OutputBlobManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---

##### `OutputBlobUriInput`<sup>Optional</sup> <a name="OutputBlobUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput"></a>

```csharp
public string OutputBlobUriInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `ProtectedParameterInput`<sup>Optional</sup> <a name="ProtectedParameterInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput"></a>

```csharp
public object ProtectedParameterInput { get; }
```

- *Type:* object

---

##### `RunAsPasswordInput`<sup>Optional</sup> <a name="RunAsPasswordInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput"></a>

```csharp
public string RunAsPasswordInput { get; }
```

- *Type:* string

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput"></a>

```csharp
public string RunAsUserInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput"></a>

```csharp
public VirtualMachineRunCommandSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `ErrorBlobUri`<sup>Required</sup> <a name="ErrorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri"></a>

```csharp
public string ErrorBlobUri { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputBlobUri`<sup>Required</sup> <a name="OutputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri"></a>

```csharp
public string OutputBlobUri { get; }
```

- *Type:* string

---

##### `RunAsPassword`<sup>Required</sup> <a name="RunAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword"></a>

```csharp
public string RunAsPassword { get; }
```

- *Type:* string

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser"></a>

```csharp
public string RunAsUser { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineRunCommandConfig <a name="VirtualMachineRunCommandConfig" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    VirtualMachineRunCommandSource Source,
    string VirtualMachineId,
    VirtualMachineRunCommandErrorBlobManagedIdentity ErrorBlobManagedIdentity = null,
    string ErrorBlobUri = null,
    string Id = null,
    VirtualMachineRunCommandOutputBlobManagedIdentity OutputBlobManagedIdentity = null,
    string OutputBlobUri = null,
    object Parameter = null,
    object ProtectedParameter = null,
    string RunAsPassword = null,
    string RunAsUser = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VirtualMachineRunCommandTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity">ErrorBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | error_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri">ErrorBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity">OutputBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | output_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri">OutputBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter">ProtectedParameter</a></code> | <code>object</code> | protected_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword">RunAsPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser">RunAsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source"></a>

```csharp
public VirtualMachineRunCommandSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#source VirtualMachineRunCommand#source}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}.

---

##### `ErrorBlobManagedIdentity`<sup>Optional</sup> <a name="ErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity"></a>

```csharp
public VirtualMachineRunCommandErrorBlobManagedIdentity ErrorBlobManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

error_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#error_blob_managed_identity VirtualMachineRunCommand#error_blob_managed_identity}

---

##### `ErrorBlobUri`<sup>Optional</sup> <a name="ErrorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri"></a>

```csharp
public string ErrorBlobUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OutputBlobManagedIdentity`<sup>Optional</sup> <a name="OutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity"></a>

```csharp
public VirtualMachineRunCommandOutputBlobManagedIdentity OutputBlobManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

output_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#output_blob_managed_identity VirtualMachineRunCommand#output_blob_managed_identity}

---

##### `OutputBlobUri`<sup>Optional</sup> <a name="OutputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri"></a>

```csharp
public string OutputBlobUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#parameter VirtualMachineRunCommand#parameter}

---

##### `ProtectedParameter`<sup>Optional</sup> <a name="ProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter"></a>

```csharp
public object ProtectedParameter { get; set; }
```

- *Type:* object

protected_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#protected_parameter VirtualMachineRunCommand#protected_parameter}

---

##### `RunAsPassword`<sup>Optional</sup> <a name="RunAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword"></a>

```csharp
public string RunAsPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}.

---

##### `RunAsUser`<sup>Optional</sup> <a name="RunAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser"></a>

```csharp
public string RunAsUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts"></a>

```csharp
public VirtualMachineRunCommandTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#timeouts VirtualMachineRunCommand#timeouts}

---

### VirtualMachineRunCommandErrorBlobManagedIdentity <a name="VirtualMachineRunCommandErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandErrorBlobManagedIdentity {
    string ClientId = null,
    string ObjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandInstanceView <a name="VirtualMachineRunCommandInstanceView" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandInstanceView {

};
```


### VirtualMachineRunCommandOutputBlobManagedIdentity <a name="VirtualMachineRunCommandOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandOutputBlobManagedIdentity {
    string ClientId = null,
    string ObjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandParameter <a name="VirtualMachineRunCommandParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandParameter {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandProtectedParameter <a name="VirtualMachineRunCommandProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandProtectedParameter {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandSource <a name="VirtualMachineRunCommandSource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandSource {
    string CommandId = null,
    string Script = null,
    string ScriptUri = null,
    VirtualMachineRunCommandSourceScriptUriManagedIdentity ScriptUriManagedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId">CommandId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script">Script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri">ScriptUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity">ScriptUriManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | script_uri_managed_identity block. |

---

##### `CommandId`<sup>Optional</sup> <a name="CommandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId"></a>

```csharp
public string CommandId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}.

---

##### `ScriptUri`<sup>Optional</sup> <a name="ScriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri"></a>

```csharp
public string ScriptUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}.

---

##### `ScriptUriManagedIdentity`<sup>Optional</sup> <a name="ScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity"></a>

```csharp
public VirtualMachineRunCommandSourceScriptUriManagedIdentity ScriptUriManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

script_uri_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#script_uri_managed_identity VirtualMachineRunCommand#script_uri_managed_identity}

---

### VirtualMachineRunCommandSourceScriptUriManagedIdentity <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandSourceScriptUriManagedIdentity {
    string ClientId = null,
    string ObjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandTimeouts <a name="VirtualMachineRunCommandTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId"></a>

```csharp
private void ResetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineRunCommandErrorBlobManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---


### VirtualMachineRunCommandInstanceViewList <a name="VirtualMachineRunCommandInstanceViewList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandInstanceViewList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get"></a>

```csharp
private VirtualMachineRunCommandInstanceViewOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VirtualMachineRunCommandInstanceViewOutputReference <a name="VirtualMachineRunCommandInstanceViewOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandInstanceViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage">ExecutionMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState">ExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode">ExitCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output">Output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `ExecutionMessage`<sup>Required</sup> <a name="ExecutionMessage" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage"></a>

```csharp
public string ExecutionMessage { get; }
```

- *Type:* string

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState"></a>

```csharp
public string ExecutionState { get; }
```

- *Type:* string

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode"></a>

```csharp
public double ExitCode { get; }
```

- *Type:* double

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output"></a>

```csharp
public string Output { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineRunCommandInstanceView InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a>

---


### VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId"></a>

```csharp
private void ResetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineRunCommandOutputBlobManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---


### VirtualMachineRunCommandParameterList <a name="VirtualMachineRunCommandParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get"></a>

```csharp
private VirtualMachineRunCommandParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineRunCommandParameterOutputReference <a name="VirtualMachineRunCommandParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineRunCommandProtectedParameterList <a name="VirtualMachineRunCommandProtectedParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandProtectedParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get"></a>

```csharp
private VirtualMachineRunCommandProtectedParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineRunCommandProtectedParameterOutputReference <a name="VirtualMachineRunCommandProtectedParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandProtectedParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineRunCommandSourceOutputReference <a name="VirtualMachineRunCommandSourceOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity">PutScriptUriManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId">ResetCommandId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri">ResetScriptUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity">ResetScriptUriManagedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptUriManagedIdentity` <a name="PutScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity"></a>

```csharp
private void PutScriptUriManagedIdentity(VirtualMachineRunCommandSourceScriptUriManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---

##### `ResetCommandId` <a name="ResetCommandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId"></a>

```csharp
private void ResetCommandId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetScriptUri` <a name="ResetScriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri"></a>

```csharp
private void ResetScriptUri()
```

##### `ResetScriptUriManagedIdentity` <a name="ResetScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity"></a>

```csharp
private void ResetScriptUriManagedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity">ScriptUriManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput">CommandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput">ScriptUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput">ScriptUriManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId">CommandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri">ScriptUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptUriManagedIdentity`<sup>Required</sup> <a name="ScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity"></a>

```csharp
public VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference ScriptUriManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a>

---

##### `CommandIdInput`<sup>Optional</sup> <a name="CommandIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput"></a>

```csharp
public string CommandIdInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `ScriptUriInput`<sup>Optional</sup> <a name="ScriptUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput"></a>

```csharp
public string ScriptUriInput { get; }
```

- *Type:* string

---

##### `ScriptUriManagedIdentityInput`<sup>Optional</sup> <a name="ScriptUriManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput"></a>

```csharp
public VirtualMachineRunCommandSourceScriptUriManagedIdentity ScriptUriManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---

##### `CommandId`<sup>Required</sup> <a name="CommandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId"></a>

```csharp
public string CommandId { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `ScriptUri`<sup>Required</sup> <a name="ScriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri"></a>

```csharp
public string ScriptUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineRunCommandSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---


### VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId"></a>

```csharp
private void ResetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineRunCommandSourceScriptUriManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---


### VirtualMachineRunCommandTimeoutsOutputReference <a name="VirtualMachineRunCommandTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualMachineRunCommandTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



