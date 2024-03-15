# `policyVirtualMachineConfigurationAssignment` Submodule <a name="`policyVirtualMachineConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyVirtualMachineConfigurationAssignment <a name="PolicyVirtualMachineConfigurationAssignment" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment azurerm_policy_virtual_machine_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignment(Construct Scope, string Id, PolicyVirtualMachineConfigurationAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig">PolicyVirtualMachineConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig">PolicyVirtualMachineConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration"></a>

```csharp
private void PutConfiguration(PolicyVirtualMachineConfigurationAssignmentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(PolicyVirtualMachineConfigurationAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyVirtualMachineConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicyVirtualMachineConfigurationAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicyVirtualMachineConfigurationAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicyVirtualMachineConfigurationAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicyVirtualMachineConfigurationAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicyVirtualMachineConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyVirtualMachineConfigurationAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyVirtualMachineConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicyVirtualMachineConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference">PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configuration"></a>

```csharp
public PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference">PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeouts"></a>

```csharp
public PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configurationInput"></a>

```csharp
public PolicyVirtualMachineConfigurationAssignmentConfiguration ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyVirtualMachineConfigurationAssignmentConfig <a name="PolicyVirtualMachineConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    PolicyVirtualMachineConfigurationAssignmentConfiguration Configuration,
    string Location,
    string Name,
    string VirtualMachineId,
    string Id = null,
    PolicyVirtualMachineConfigurationAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.configuration"></a>

```csharp
public PolicyVirtualMachineConfigurationAssignmentConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#configuration PolicyVirtualMachineConfigurationAssignment#configuration}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}.

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts"></a>

```csharp
public PolicyVirtualMachineConfigurationAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#timeouts PolicyVirtualMachineConfigurationAssignment#timeouts}

---

### PolicyVirtualMachineConfigurationAssignmentConfiguration <a name="PolicyVirtualMachineConfigurationAssignmentConfiguration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentConfiguration {
    string AssignmentType = null,
    string ContentHash = null,
    string ContentUri = null,
    object Parameter = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.assignmentType">AssignmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#assignment_type PolicyVirtualMachineConfigurationAssignment#assignment_type}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentHash">ContentHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#content_hash PolicyVirtualMachineConfigurationAssignment#content_hash}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentUri">ContentUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#content_uri PolicyVirtualMachineConfigurationAssignment#content_uri}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#version PolicyVirtualMachineConfigurationAssignment#version}. |

---

##### `AssignmentType`<sup>Optional</sup> <a name="AssignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.assignmentType"></a>

```csharp
public string AssignmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#assignment_type PolicyVirtualMachineConfigurationAssignment#assignment_type}.

---

##### `ContentHash`<sup>Optional</sup> <a name="ContentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentHash"></a>

```csharp
public string ContentHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#content_hash PolicyVirtualMachineConfigurationAssignment#content_hash}.

---

##### `ContentUri`<sup>Optional</sup> <a name="ContentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentUri"></a>

```csharp
public string ContentUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#content_uri PolicyVirtualMachineConfigurationAssignment#content_uri}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#parameter PolicyVirtualMachineConfigurationAssignment#parameter}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#version PolicyVirtualMachineConfigurationAssignment#version}.

---

### PolicyVirtualMachineConfigurationAssignmentConfigurationParameter <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentConfigurationParameter {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#value PolicyVirtualMachineConfigurationAssignment#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#value PolicyVirtualMachineConfigurationAssignment#value}.

---

### PolicyVirtualMachineConfigurationAssignmentTimeouts <a name="PolicyVirtualMachineConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#create PolicyVirtualMachineConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#delete PolicyVirtualMachineConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#read PolicyVirtualMachineConfigurationAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#update PolicyVirtualMachineConfigurationAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#create PolicyVirtualMachineConfigurationAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#delete PolicyVirtualMachineConfigurationAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#read PolicyVirtualMachineConfigurationAssignment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/policy_virtual_machine_configuration_assignment#update PolicyVirtualMachineConfigurationAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetAssignmentType">ResetAssignmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentHash">ResetContentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentUri">ResetContentUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetAssignmentType` <a name="ResetAssignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetAssignmentType"></a>

```csharp
private void ResetAssignmentType()
```

##### `ResetContentHash` <a name="ResetContentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentHash"></a>

```csharp
private void ResetContentHash()
```

##### `ResetContentUri` <a name="ResetContentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentUri"></a>

```csharp
private void ResetContentUri()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList">PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentTypeInput">AssignmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHashInput">ContentHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUriInput">ContentUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentType">AssignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHash">ContentHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUri">ContentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameter"></a>

```csharp
public PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList">PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList</a>

---

##### `AssignmentTypeInput`<sup>Optional</sup> <a name="AssignmentTypeInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentTypeInput"></a>

```csharp
public string AssignmentTypeInput { get; }
```

- *Type:* string

---

##### `ContentHashInput`<sup>Optional</sup> <a name="ContentHashInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHashInput"></a>

```csharp
public string ContentHashInput { get; }
```

- *Type:* string

---

##### `ContentUriInput`<sup>Optional</sup> <a name="ContentUriInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUriInput"></a>

```csharp
public string ContentUriInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentType"></a>

```csharp
public string AssignmentType { get; }
```

- *Type:* string

---

##### `ContentHash`<sup>Required</sup> <a name="ContentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHash"></a>

```csharp
public string ContentHash { get; }
```

- *Type:* string

---

##### `ContentUri`<sup>Required</sup> <a name="ContentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUri"></a>

```csharp
public string ContentUri { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.internalValue"></a>

```csharp
public PolicyVirtualMachineConfigurationAssignmentConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---


### PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get"></a>

```csharp
private PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



