# `policySetDefinition` Submodule <a name="`policySetDefinition` Submodule" id="@cdktf/provider-azurerm.policySetDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySetDefinition <a name="PolicySetDefinition" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition azurerm_policy_set_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinition(Construct Scope, string Id, PolicySetDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig">PolicySetDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig">PolicySetDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup">PutPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference">PutPolicyDefinitionReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId">ResetManagementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup">ResetPolicyDefinitionGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyDefinitionGroup` <a name="PutPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup"></a>

```csharp
private void PutPolicyDefinitionGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionGroup.parameter.value"></a>

- *Type:* object

---

##### `PutPolicyDefinitionReference` <a name="PutPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference"></a>

```csharp
private void PutPolicyDefinitionReference(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putPolicyDefinitionReference.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(PolicySetDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagementGroupId` <a name="ResetManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetManagementGroupId"></a>

```csharp
private void ResetManagementGroupId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPolicyDefinitionGroup` <a name="ResetPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetPolicyDefinitionGroup"></a>

```csharp
private void ResetPolicyDefinitionGroup()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicySetDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicySetDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicySetDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicySetDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PolicySetDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PolicySetDefinition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicySetDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicySetDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PolicySetDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup">PolicyDefinitionGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference">PolicyDefinitionReference</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput">PolicyDefinitionGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput">PolicyDefinitionReferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PolicyDefinitionGroup`<sup>Required</sup> <a name="PolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroup"></a>

```csharp
public PolicySetDefinitionPolicyDefinitionGroupList PolicyDefinitionGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList">PolicySetDefinitionPolicyDefinitionGroupList</a>

---

##### `PolicyDefinitionReference`<sup>Required</sup> <a name="PolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReference"></a>

```csharp
public PolicySetDefinitionPolicyDefinitionReferenceList PolicyDefinitionReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList">PolicySetDefinitionPolicyDefinitionReferenceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeouts"></a>

```csharp
public PolicySetDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference">PolicySetDefinitionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupIdInput"></a>

```csharp
public string ManagementGroupIdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionGroupInput`<sup>Optional</sup> <a name="PolicyDefinitionGroupInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionGroupInput"></a>

```csharp
public object PolicyDefinitionGroupInput { get; }
```

- *Type:* object

---

##### `PolicyDefinitionReferenceInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyDefinitionReferenceInput"></a>

```csharp
public object PolicyDefinitionReferenceInput { get; }
```

- *Type:* object

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetDefinitionConfig <a name="PolicySetDefinitionConfig" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Name,
    object PolicyDefinitionReference,
    string PolicyType,
    string Description = null,
    string Id = null,
    string ManagementGroupId = null,
    string Metadata = null,
    string Parameters = null,
    object PolicyDefinitionGroup = null,
    PolicySetDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference">PolicyDefinitionReference</a></code> | <code>object</code> | policy_definition_reference block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata">Metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup">PolicyDefinitionGroup</a></code> | <code>object</code> | policy_definition_group block. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `PolicyDefinitionReference`<sup>Required</sup> <a name="PolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionReference"></a>

```csharp
public object PolicyDefinitionReference { get; set; }
```

- *Type:* object

policy_definition_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_definition_reference PolicySetDefinition#policy_definition_reference}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_type PolicySetDefinition#policy_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#id PolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementGroupId`<sup>Optional</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#management_group_id PolicySetDefinition#management_group_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#metadata PolicySetDefinition#metadata}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#parameters PolicySetDefinition#parameters}.

---

##### `PolicyDefinitionGroup`<sup>Optional</sup> <a name="PolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.policyDefinitionGroup"></a>

```csharp
public object PolicyDefinitionGroup { get; set; }
```

- *Type:* object

policy_definition_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_definition_group PolicySetDefinition#policy_definition_group}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionConfig.property.timeouts"></a>

```csharp
public PolicySetDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts">PolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#timeouts PolicySetDefinition#timeouts}

---

### PolicySetDefinitionPolicyDefinitionGroup <a name="PolicySetDefinitionPolicyDefinitionGroup" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionPolicyDefinitionGroup {
    string Name,
    string AdditionalMetadataResourceId = null,
    string Category = null,
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId">AdditionalMetadataResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#name PolicySetDefinition#name}.

---

##### `AdditionalMetadataResourceId`<sup>Optional</sup> <a name="AdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.additionalMetadataResourceId"></a>

```csharp
public string AdditionalMetadataResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#additional_metadata_resource_id PolicySetDefinition#additional_metadata_resource_id}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#category PolicySetDefinition#category}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#description PolicySetDefinition#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroup.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#display_name PolicySetDefinition#display_name}.

---

### PolicySetDefinitionPolicyDefinitionReference <a name="PolicySetDefinitionPolicyDefinitionReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionPolicyDefinitionReference {
    string PolicyDefinitionId,
    string ParameterValues = null,
    string[] PolicyGroupNames = null,
    string ReferenceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues">ParameterValues</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames">PolicyGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId">ReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}. |

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyDefinitionId"></a>

```csharp
public string PolicyDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_definition_id PolicySetDefinition#policy_definition_id}.

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.parameterValues"></a>

```csharp
public string ParameterValues { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#parameter_values PolicySetDefinition#parameter_values}.

---

##### `PolicyGroupNames`<sup>Optional</sup> <a name="PolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.policyGroupNames"></a>

```csharp
public string[] PolicyGroupNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#policy_group_names PolicySetDefinition#policy_group_names}.

---

##### `ReferenceId`<sup>Optional</sup> <a name="ReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReference.property.referenceId"></a>

```csharp
public string ReferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#reference_id PolicySetDefinition#reference_id}.

---

### PolicySetDefinitionTimeouts <a name="PolicySetDefinitionTimeouts" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#create PolicySetDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#delete PolicySetDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#read PolicySetDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/policy_set_definition#update PolicySetDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetDefinitionPolicyDefinitionGroupList <a name="PolicySetDefinitionPolicyDefinitionGroupList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionPolicyDefinitionGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get"></a>

```csharp
private PolicySetDefinitionPolicyDefinitionGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicySetDefinitionPolicyDefinitionGroupOutputReference <a name="PolicySetDefinitionPolicyDefinitionGroupOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionPolicyDefinitionGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId">ResetAdditionalMetadataResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalMetadataResourceId` <a name="ResetAdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetAdditionalMetadataResourceId"></a>

```csharp
private void ResetAdditionalMetadataResourceId()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput">AdditionalMetadataResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId">AdditionalMetadataResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalMetadataResourceIdInput`<sup>Optional</sup> <a name="AdditionalMetadataResourceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceIdInput"></a>

```csharp
public string AdditionalMetadataResourceIdInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AdditionalMetadataResourceId`<sup>Required</sup> <a name="AdditionalMetadataResourceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId"></a>

```csharp
public string AdditionalMetadataResourceId { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicySetDefinitionPolicyDefinitionReferenceList <a name="PolicySetDefinitionPolicyDefinitionReferenceList" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionPolicyDefinitionReferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get"></a>

```csharp
private PolicySetDefinitionPolicyDefinitionReferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicySetDefinitionPolicyDefinitionReferenceOutputReference <a name="PolicySetDefinitionPolicyDefinitionReferenceOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionPolicyDefinitionReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues">ResetParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames">ResetPolicyGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId">ResetReferenceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetParameterValues"></a>

```csharp
private void ResetParameterValues()
```

##### `ResetPolicyGroupNames` <a name="ResetPolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetPolicyGroupNames"></a>

```csharp
private void ResetPolicyGroupNames()
```

##### `ResetReferenceId` <a name="ResetReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.resetReferenceId"></a>

```csharp
private void ResetReferenceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput">PolicyGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput">ReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues">ParameterValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames">PolicyGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId">ReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValuesInput"></a>

```csharp
public string ParameterValuesInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionIdInput"></a>

```csharp
public string PolicyDefinitionIdInput { get; }
```

- *Type:* string

---

##### `PolicyGroupNamesInput`<sup>Optional</sup> <a name="PolicyGroupNamesInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNamesInput"></a>

```csharp
public string[] PolicyGroupNamesInput { get; }
```

- *Type:* string[]

---

##### `ReferenceIdInput`<sup>Optional</sup> <a name="ReferenceIdInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceIdInput"></a>

```csharp
public string ReferenceIdInput { get; }
```

- *Type:* string

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues"></a>

```csharp
public string ParameterValues { get; }
```

- *Type:* string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId"></a>

```csharp
public string PolicyDefinitionId { get; }
```

- *Type:* string

---

##### `PolicyGroupNames`<sup>Required</sup> <a name="PolicyGroupNames" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames"></a>

```csharp
public string[] PolicyGroupNames { get; }
```

- *Type:* string[]

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId"></a>

```csharp
public string ReferenceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicySetDefinitionTimeoutsOutputReference <a name="PolicySetDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PolicySetDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.policySetDefinition.PolicySetDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



