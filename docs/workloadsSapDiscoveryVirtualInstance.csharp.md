# `workloadsSapDiscoveryVirtualInstance` Submodule <a name="`workloadsSapDiscoveryVirtualInstance` Submodule" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadsSapDiscoveryVirtualInstance <a name="WorkloadsSapDiscoveryVirtualInstance" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance azurerm_workloads_sap_discovery_virtual_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WorkloadsSapDiscoveryVirtualInstance(Construct Scope, string Id, WorkloadsSapDiscoveryVirtualInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig">WorkloadsSapDiscoveryVirtualInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig">WorkloadsSapDiscoveryVirtualInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName">ResetManagedStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity"></a>

```csharp
private void PutIdentity(WorkloadsSapDiscoveryVirtualInstanceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkloadsSapDiscoveryVirtualInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedResourceGroupName"></a>

```csharp
private void ResetManagedResourceGroupName()
```

##### `ResetManagedStorageAccountName` <a name="ResetManagedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetManagedStorageAccountName"></a>

```csharp
private void ResetManagedStorageAccountName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WorkloadsSapDiscoveryVirtualInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WorkloadsSapDiscoveryVirtualInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WorkloadsSapDiscoveryVirtualInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WorkloadsSapDiscoveryVirtualInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkloadsSapDiscoveryVirtualInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkloadsSapDiscoveryVirtualInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkloadsSapDiscoveryVirtualInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkloadsSapDiscoveryVirtualInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput">CentralServerVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput">ManagedStorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput">SapProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId">CentralServerVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName">ManagedStorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct">SapProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identity"></a>

```csharp
public WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference">WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeouts"></a>

```csharp
public WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference">WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference</a>

---

##### `CentralServerVirtualMachineIdInput`<sup>Optional</sup> <a name="CentralServerVirtualMachineIdInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineIdInput"></a>

```csharp
public string CentralServerVirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.identityInput"></a>

```csharp
public WorkloadsSapDiscoveryVirtualInstanceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupNameInput"></a>

```csharp
public string ManagedResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ManagedStorageAccountNameInput`<sup>Optional</sup> <a name="ManagedStorageAccountNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountNameInput"></a>

```csharp
public string ManagedStorageAccountNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SapProductInput`<sup>Optional</sup> <a name="SapProductInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProductInput"></a>

```csharp
public string SapProductInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CentralServerVirtualMachineId`<sup>Required</sup> <a name="CentralServerVirtualMachineId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.centralServerVirtualMachineId"></a>

```csharp
public string CentralServerVirtualMachineId { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; }
```

- *Type:* string

---

##### `ManagedStorageAccountName`<sup>Required</sup> <a name="ManagedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.managedStorageAccountName"></a>

```csharp
public string ManagedStorageAccountName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SapProduct`<sup>Required</sup> <a name="SapProduct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.sapProduct"></a>

```csharp
public string SapProduct { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadsSapDiscoveryVirtualInstanceConfig <a name="WorkloadsSapDiscoveryVirtualInstanceConfig" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WorkloadsSapDiscoveryVirtualInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CentralServerVirtualMachineId,
    string Environment,
    string Location,
    string Name,
    string ResourceGroupName,
    string SapProduct,
    string Id = null,
    WorkloadsSapDiscoveryVirtualInstanceIdentity Identity = null,
    string ManagedResourceGroupName = null,
    string ManagedStorageAccountName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WorkloadsSapDiscoveryVirtualInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId">CentralServerVirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment">Environment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct">SapProduct</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName">ManagedStorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CentralServerVirtualMachineId`<sup>Required</sup> <a name="CentralServerVirtualMachineId" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.centralServerVirtualMachineId"></a>

```csharp
public string CentralServerVirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#central_server_virtual_machine_id WorkloadsSapDiscoveryVirtualInstance#central_server_virtual_machine_id}.

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#environment WorkloadsSapDiscoveryVirtualInstance#environment}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#location WorkloadsSapDiscoveryVirtualInstance#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#name WorkloadsSapDiscoveryVirtualInstance#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#resource_group_name WorkloadsSapDiscoveryVirtualInstance#resource_group_name}.

---

##### `SapProduct`<sup>Required</sup> <a name="SapProduct" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.sapProduct"></a>

```csharp
public string SapProduct { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#sap_product WorkloadsSapDiscoveryVirtualInstance#sap_product}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#id WorkloadsSapDiscoveryVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.identity"></a>

```csharp
public WorkloadsSapDiscoveryVirtualInstanceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#identity WorkloadsSapDiscoveryVirtualInstance#identity}

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_resource_group_name WorkloadsSapDiscoveryVirtualInstance#managed_resource_group_name}.

---

##### `ManagedStorageAccountName`<sup>Optional</sup> <a name="ManagedStorageAccountName" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.managedStorageAccountName"></a>

```csharp
public string ManagedStorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#managed_storage_account_name WorkloadsSapDiscoveryVirtualInstance#managed_storage_account_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#tags WorkloadsSapDiscoveryVirtualInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceConfig.property.timeouts"></a>

```csharp
public WorkloadsSapDiscoveryVirtualInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts">WorkloadsSapDiscoveryVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#timeouts WorkloadsSapDiscoveryVirtualInstance#timeouts}

---

### WorkloadsSapDiscoveryVirtualInstanceIdentity <a name="WorkloadsSapDiscoveryVirtualInstanceIdentity" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WorkloadsSapDiscoveryVirtualInstanceIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#identity_ids WorkloadsSapDiscoveryVirtualInstance#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#type WorkloadsSapDiscoveryVirtualInstance#type}.

---

### WorkloadsSapDiscoveryVirtualInstanceTimeouts <a name="WorkloadsSapDiscoveryVirtualInstanceTimeouts" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WorkloadsSapDiscoveryVirtualInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#create WorkloadsSapDiscoveryVirtualInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#delete WorkloadsSapDiscoveryVirtualInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#read WorkloadsSapDiscoveryVirtualInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/workloads_sap_discovery_virtual_instance#update WorkloadsSapDiscoveryVirtualInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentityOutputReference.property.internalValue"></a>

```csharp
public WorkloadsSapDiscoveryVirtualInstanceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceIdentity">WorkloadsSapDiscoveryVirtualInstanceIdentity</a>

---


### WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference <a name="WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.workloadsSapDiscoveryVirtualInstance.WorkloadsSapDiscoveryVirtualInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



