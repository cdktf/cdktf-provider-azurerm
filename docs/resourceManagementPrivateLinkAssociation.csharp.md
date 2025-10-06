# `resourceManagementPrivateLinkAssociation` Submodule <a name="`resourceManagementPrivateLinkAssociation` Submodule" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagementPrivateLinkAssociation <a name="ResourceManagementPrivateLinkAssociation" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association azurerm_resource_management_private_link_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceManagementPrivateLinkAssociation(Construct Scope, string Id, ResourceManagementPrivateLinkAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig">ResourceManagementPrivateLinkAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig">ResourceManagementPrivateLinkAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourceManagementPrivateLinkAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceManagementPrivateLinkAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceManagementPrivateLinkAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceManagementPrivateLinkAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceManagementPrivateLinkAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourceManagementPrivateLinkAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ResourceManagementPrivateLinkAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceManagementPrivateLinkAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceManagementPrivateLinkAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ResourceManagementPrivateLinkAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference">ResourceManagementPrivateLinkAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkIdInput">ResourceManagementPrivateLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkId">ResourceManagementPrivateLinkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeouts"></a>

```csharp
public ResourceManagementPrivateLinkAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference">ResourceManagementPrivateLinkAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupIdInput"></a>

```csharp
public string ManagementGroupIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ResourceManagementPrivateLinkIdInput`<sup>Optional</sup> <a name="ResourceManagementPrivateLinkIdInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkIdInput"></a>

```csharp
public string ResourceManagementPrivateLinkIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|ResourceManagementPrivateLinkAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ResourceManagementPrivateLinkId`<sup>Required</sup> <a name="ResourceManagementPrivateLinkId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.resourceManagementPrivateLinkId"></a>

```csharp
public string ResourceManagementPrivateLinkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagementPrivateLinkAssociationConfig <a name="ResourceManagementPrivateLinkAssociationConfig" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceManagementPrivateLinkAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ManagementGroupId,
    bool|IResolvable PublicNetworkAccessEnabled,
    string ResourceManagementPrivateLinkId,
    string Id = null,
    string Name = null,
    ResourceManagementPrivateLinkAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.resourceManagementPrivateLinkId">ResourceManagementPrivateLinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#management_group_id ResourceManagementPrivateLinkAssociation#management_group_id}.

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#public_network_access_enabled ResourceManagementPrivateLinkAssociation#public_network_access_enabled}.

---

##### `ResourceManagementPrivateLinkId`<sup>Required</sup> <a name="ResourceManagementPrivateLinkId" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.resourceManagementPrivateLinkId"></a>

```csharp
public string ResourceManagementPrivateLinkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#resource_management_private_link_id ResourceManagementPrivateLinkAssociation#resource_management_private_link_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#id ResourceManagementPrivateLinkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#name ResourceManagementPrivateLinkAssociation#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationConfig.property.timeouts"></a>

```csharp
public ResourceManagementPrivateLinkAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#timeouts ResourceManagementPrivateLinkAssociation#timeouts}

---

### ResourceManagementPrivateLinkAssociationTimeouts <a name="ResourceManagementPrivateLinkAssociationTimeouts" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceManagementPrivateLinkAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#create ResourceManagementPrivateLinkAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#delete ResourceManagementPrivateLinkAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#read ResourceManagementPrivateLinkAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#create ResourceManagementPrivateLinkAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#delete ResourceManagementPrivateLinkAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/resource_management_private_link_association#read ResourceManagementPrivateLinkAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagementPrivateLinkAssociationTimeoutsOutputReference <a name="ResourceManagementPrivateLinkAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourceManagementPrivateLinkAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResourceManagementPrivateLinkAssociationTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.resourceManagementPrivateLinkAssociation.ResourceManagementPrivateLinkAssociationTimeouts">ResourceManagementPrivateLinkAssociationTimeouts</a>

---



