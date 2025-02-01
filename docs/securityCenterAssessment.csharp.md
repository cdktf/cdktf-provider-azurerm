# `securityCenterAssessment` Submodule <a name="`securityCenterAssessment` Submodule" id="@cdktf/provider-azurerm.securityCenterAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterAssessment <a name="SecurityCenterAssessment" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment azurerm_security_center_assessment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAssessment(Construct Scope, string Id, SecurityCenterAssessmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig">SecurityCenterAssessmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig">SecurityCenterAssessmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.putStatus">PutStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetAdditionalData">ResetAdditionalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStatus` <a name="PutStatus" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.putStatus"></a>

```csharp
private void PutStatus(SecurityCenterAssessmentStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus">SecurityCenterAssessmentStatus</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityCenterAssessmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts">SecurityCenterAssessmentTimeouts</a>

---

##### `ResetAdditionalData` <a name="ResetAdditionalData" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetAdditionalData"></a>

```csharp
private void ResetAdditionalData()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterAssessment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterAssessment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterAssessment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterAssessment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterAssessment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityCenterAssessment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityCenterAssessment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityCenterAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.status">Status</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference">SecurityCenterAssessmentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference">SecurityCenterAssessmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.additionalDataInput">AdditionalDataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.assessmentPolicyIdInput">AssessmentPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.statusInput">StatusInput</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus">SecurityCenterAssessmentStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.additionalData">AdditionalData</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.assessmentPolicyId">AssessmentPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.status"></a>

```csharp
public SecurityCenterAssessmentStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference">SecurityCenterAssessmentStatusOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.timeouts"></a>

```csharp
public SecurityCenterAssessmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference">SecurityCenterAssessmentTimeoutsOutputReference</a>

---

##### `AdditionalDataInput`<sup>Optional</sup> <a name="AdditionalDataInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.additionalDataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalDataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AssessmentPolicyIdInput`<sup>Optional</sup> <a name="AssessmentPolicyIdInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.assessmentPolicyIdInput"></a>

```csharp
public string AssessmentPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.statusInput"></a>

```csharp
public SecurityCenterAssessmentStatus StatusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus">SecurityCenterAssessmentStatus</a>

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdditionalData`<sup>Required</sup> <a name="AdditionalData" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.additionalData"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalData { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AssessmentPolicyId`<sup>Required</sup> <a name="AssessmentPolicyId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.assessmentPolicyId"></a>

```csharp
public string AssessmentPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterAssessmentConfig <a name="SecurityCenterAssessmentConfig" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAssessmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssessmentPolicyId,
    SecurityCenterAssessmentStatus Status,
    string TargetResourceId,
    System.Collections.Generic.IDictionary<string, string> AdditionalData = null,
    string Id = null,
    SecurityCenterAssessmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.assessmentPolicyId">AssessmentPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#assessment_policy_id SecurityCenterAssessment#assessment_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.status">Status</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus">SecurityCenterAssessmentStatus</a></code> | status block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#target_resource_id SecurityCenterAssessment#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.additionalData">AdditionalData</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#additional_data SecurityCenterAssessment#additional_data}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#id SecurityCenterAssessment#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts">SecurityCenterAssessmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssessmentPolicyId`<sup>Required</sup> <a name="AssessmentPolicyId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.assessmentPolicyId"></a>

```csharp
public string AssessmentPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#assessment_policy_id SecurityCenterAssessment#assessment_policy_id}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.status"></a>

```csharp
public SecurityCenterAssessmentStatus Status { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus">SecurityCenterAssessmentStatus</a>

status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#status SecurityCenterAssessment#status}

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#target_resource_id SecurityCenterAssessment#target_resource_id}.

---

##### `AdditionalData`<sup>Optional</sup> <a name="AdditionalData" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.additionalData"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalData { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#additional_data SecurityCenterAssessment#additional_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#id SecurityCenterAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentConfig.property.timeouts"></a>

```csharp
public SecurityCenterAssessmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts">SecurityCenterAssessmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#timeouts SecurityCenterAssessment#timeouts}

---

### SecurityCenterAssessmentStatus <a name="SecurityCenterAssessmentStatus" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAssessmentStatus {
    string Code,
    string Cause = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus.property.code">Code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#code SecurityCenterAssessment#code}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus.property.cause">Cause</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#cause SecurityCenterAssessment#cause}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#description SecurityCenterAssessment#description}. |

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#code SecurityCenterAssessment#code}.

---

##### `Cause`<sup>Optional</sup> <a name="Cause" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus.property.cause"></a>

```csharp
public string Cause { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#cause SecurityCenterAssessment#cause}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#description SecurityCenterAssessment#description}.

---

### SecurityCenterAssessmentTimeouts <a name="SecurityCenterAssessmentTimeouts" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAssessmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#create SecurityCenterAssessment#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#delete SecurityCenterAssessment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#read SecurityCenterAssessment#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#update SecurityCenterAssessment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#create SecurityCenterAssessment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#delete SecurityCenterAssessment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#read SecurityCenterAssessment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/security_center_assessment#update SecurityCenterAssessment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterAssessmentStatusOutputReference <a name="SecurityCenterAssessmentStatusOutputReference" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAssessmentStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.resetCause">ResetCause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCause` <a name="ResetCause" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.resetCause"></a>

```csharp
private void ResetCause()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.causeInput">CauseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.cause">Cause</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus">SecurityCenterAssessmentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CauseInput`<sup>Optional</sup> <a name="CauseInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.causeInput"></a>

```csharp
public string CauseInput { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Cause`<sup>Required</sup> <a name="Cause" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.cause"></a>

```csharp
public string Cause { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatusOutputReference.property.internalValue"></a>

```csharp
public SecurityCenterAssessmentStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentStatus">SecurityCenterAssessmentStatus</a>

---


### SecurityCenterAssessmentTimeoutsOutputReference <a name="SecurityCenterAssessmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAssessmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAssessment.SecurityCenterAssessmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



