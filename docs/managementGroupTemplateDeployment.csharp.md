# `managementGroupTemplateDeployment` Submodule <a name="`managementGroupTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupTemplateDeployment <a name="ManagementGroupTemplateDeployment" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment azurerm_management_group_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupTemplateDeployment(Construct Scope, string Id, ManagementGroupTemplateDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig">ManagementGroupTemplateDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig">ManagementGroupTemplateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetDebugLevel">ResetDebugLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetParametersContent">ResetParametersContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateContent">ResetTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateSpecVersionId">ResetTemplateSpecVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagementGroupTemplateDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts">ManagementGroupTemplateDeploymentTimeouts</a>

---

##### `ResetDebugLevel` <a name="ResetDebugLevel" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetDebugLevel"></a>

```csharp
private void ResetDebugLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParametersContent` <a name="ResetParametersContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetParametersContent"></a>

```csharp
private void ResetParametersContent()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateContent` <a name="ResetTemplateContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateContent"></a>

```csharp
private void ResetTemplateContent()
```

##### `ResetTemplateSpecVersionId` <a name="ResetTemplateSpecVersionId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateSpecVersionId"></a>

```csharp
private void ResetTemplateSpecVersionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementGroupTemplateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupTemplateDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupTemplateDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupTemplateDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupTemplateDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagementGroupTemplateDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementGroupTemplateDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementGroupTemplateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagementGroupTemplateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.outputContent">OutputContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference">ManagementGroupTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevelInput">DebugLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContentInput">ParametersContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContentInput">TemplateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionIdInput">TemplateSpecVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevel">DebugLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContent">ParametersContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContent">TemplateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OutputContent`<sup>Required</sup> <a name="OutputContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.outputContent"></a>

```csharp
public string OutputContent { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeouts"></a>

```csharp
public ManagementGroupTemplateDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference">ManagementGroupTemplateDeploymentTimeoutsOutputReference</a>

---

##### `DebugLevelInput`<sup>Optional</sup> <a name="DebugLevelInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevelInput"></a>

```csharp
public string DebugLevelInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupIdInput"></a>

```csharp
public string ManagementGroupIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersContentInput`<sup>Optional</sup> <a name="ParametersContentInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContentInput"></a>

```csharp
public string ParametersContentInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateContentInput`<sup>Optional</sup> <a name="TemplateContentInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContentInput"></a>

```csharp
public string TemplateContentInput { get; }
```

- *Type:* string

---

##### `TemplateSpecVersionIdInput`<sup>Optional</sup> <a name="TemplateSpecVersionIdInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionIdInput"></a>

```csharp
public string TemplateSpecVersionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DebugLevel`<sup>Required</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevel"></a>

```csharp
public string DebugLevel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParametersContent`<sup>Required</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContent"></a>

```csharp
public string ParametersContent { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContent"></a>

```csharp
public string TemplateContent { get; }
```

- *Type:* string

---

##### `TemplateSpecVersionId`<sup>Required</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionId"></a>

```csharp
public string TemplateSpecVersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupTemplateDeploymentConfig <a name="ManagementGroupTemplateDeploymentConfig" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupTemplateDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string ManagementGroupId,
    string Name,
    string DebugLevel = null,
    string Id = null,
    string ParametersContent = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TemplateContent = null,
    string TemplateSpecVersionId = null,
    ManagementGroupTemplateDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#location ManagementGroupTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#management_group_id ManagementGroupTemplateDeployment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#name ManagementGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.debugLevel">DebugLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#debug_level ManagementGroupTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#id ManagementGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.parametersContent">ParametersContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#parameters_content ManagementGroupTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#tags ManagementGroupTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateContent">TemplateContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#template_content ManagementGroupTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#template_spec_version_id ManagementGroupTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts">ManagementGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#location ManagementGroupTemplateDeployment#location}.

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#management_group_id ManagementGroupTemplateDeployment#management_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#name ManagementGroupTemplateDeployment#name}.

---

##### `DebugLevel`<sup>Optional</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.debugLevel"></a>

```csharp
public string DebugLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#debug_level ManagementGroupTemplateDeployment#debug_level}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#id ManagementGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParametersContent`<sup>Optional</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.parametersContent"></a>

```csharp
public string ParametersContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#parameters_content ManagementGroupTemplateDeployment#parameters_content}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#tags ManagementGroupTemplateDeployment#tags}.

---

##### `TemplateContent`<sup>Optional</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateContent"></a>

```csharp
public string TemplateContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#template_content ManagementGroupTemplateDeployment#template_content}.

---

##### `TemplateSpecVersionId`<sup>Optional</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```csharp
public string TemplateSpecVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#template_spec_version_id ManagementGroupTemplateDeployment#template_spec_version_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.timeouts"></a>

```csharp
public ManagementGroupTemplateDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts">ManagementGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#timeouts ManagementGroupTemplateDeployment#timeouts}

---

### ManagementGroupTemplateDeploymentTimeouts <a name="ManagementGroupTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupTemplateDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#create ManagementGroupTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#delete ManagementGroupTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#read ManagementGroupTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#update ManagementGroupTemplateDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#create ManagementGroupTemplateDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#delete ManagementGroupTemplateDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#read ManagementGroupTemplateDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/management_group_template_deployment#update ManagementGroupTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupTemplateDeploymentTimeoutsOutputReference <a name="ManagementGroupTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupTemplateDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



