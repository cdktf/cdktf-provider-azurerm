# `virtualDesktopWorkspaceApplicationGroupAssociation` Submodule <a name="`virtualDesktopWorkspaceApplicationGroupAssociation` Submodule" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociation <a name="VirtualDesktopWorkspaceApplicationGroupAssociation" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association azurerm_virtual_desktop_workspace_application_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopWorkspaceApplicationGroupAssociation(Construct Scope, string Id, VirtualDesktopWorkspaceApplicationGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig">VirtualDesktopWorkspaceApplicationGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig">VirtualDesktopWorkspaceApplicationGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopWorkspaceApplicationGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopWorkspaceApplicationGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopWorkspaceApplicationGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopWorkspaceApplicationGroupAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopWorkspaceApplicationGroupAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualDesktopWorkspaceApplicationGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDesktopWorkspaceApplicationGroupAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDesktopWorkspaceApplicationGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopWorkspaceApplicationGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference">VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupIdInput">ApplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupId">ApplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeouts"></a>

```csharp
public VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference">VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference</a>

---

##### `ApplicationGroupIdInput`<sup>Optional</sup> <a name="ApplicationGroupIdInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupIdInput"></a>

```csharp
public string ApplicationGroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `ApplicationGroupId`<sup>Required</sup> <a name="ApplicationGroupId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupId"></a>

```csharp
public string ApplicationGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociationConfig <a name="VirtualDesktopWorkspaceApplicationGroupAssociationConfig" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopWorkspaceApplicationGroupAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationGroupId,
    string WorkspaceId,
    string Id = null,
    VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.applicationGroupId">ApplicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationGroupId`<sup>Required</sup> <a name="ApplicationGroupId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.applicationGroupId"></a>

```csharp
public string ApplicationGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.timeouts"></a>

```csharp
public VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#timeouts VirtualDesktopWorkspaceApplicationGroupAssociation#timeouts}

---

### VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts <a name="VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#create VirtualDesktopWorkspaceApplicationGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#delete VirtualDesktopWorkspaceApplicationGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#read VirtualDesktopWorkspaceApplicationGroupAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#create VirtualDesktopWorkspaceApplicationGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#delete VirtualDesktopWorkspaceApplicationGroupAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/virtual_desktop_workspace_application_group_association#read VirtualDesktopWorkspaceApplicationGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference <a name="VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



