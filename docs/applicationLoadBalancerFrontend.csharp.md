# `applicationLoadBalancerFrontend` Submodule <a name="`applicationLoadBalancerFrontend` Submodule" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadBalancerFrontend <a name="ApplicationLoadBalancerFrontend" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend azurerm_application_load_balancer_frontend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationLoadBalancerFrontend(Construct Scope, string Id, ApplicationLoadBalancerFrontendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig">ApplicationLoadBalancerFrontendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig">ApplicationLoadBalancerFrontendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationLoadBalancerFrontendTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts">ApplicationLoadBalancerFrontendTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadBalancerFrontend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationLoadBalancerFrontend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationLoadBalancerFrontend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationLoadBalancerFrontend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationLoadBalancerFrontend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationLoadBalancerFrontend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationLoadBalancerFrontend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationLoadBalancerFrontend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadBalancerFrontend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference">ApplicationLoadBalancerFrontendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.applicationLoadBalancerIdInput">ApplicationLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.applicationLoadBalancerId">ApplicationLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FullyQualifiedDomainName`<sup>Required</sup> <a name="FullyQualifiedDomainName" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.fullyQualifiedDomainName"></a>

```csharp
public string FullyQualifiedDomainName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.timeouts"></a>

```csharp
public ApplicationLoadBalancerFrontendTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference">ApplicationLoadBalancerFrontendTimeoutsOutputReference</a>

---

##### `ApplicationLoadBalancerIdInput`<sup>Optional</sup> <a name="ApplicationLoadBalancerIdInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.applicationLoadBalancerIdInput"></a>

```csharp
public string ApplicationLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationLoadBalancerId`<sup>Required</sup> <a name="ApplicationLoadBalancerId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.applicationLoadBalancerId"></a>

```csharp
public string ApplicationLoadBalancerId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadBalancerFrontendConfig <a name="ApplicationLoadBalancerFrontendConfig" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationLoadBalancerFrontendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationLoadBalancerId,
    string Name,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ApplicationLoadBalancerFrontendTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.applicationLoadBalancerId">ApplicationLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#application_load_balancer_id ApplicationLoadBalancerFrontend#application_load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#name ApplicationLoadBalancerFrontend#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#id ApplicationLoadBalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#tags ApplicationLoadBalancerFrontend#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts">ApplicationLoadBalancerFrontendTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationLoadBalancerId`<sup>Required</sup> <a name="ApplicationLoadBalancerId" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.applicationLoadBalancerId"></a>

```csharp
public string ApplicationLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#application_load_balancer_id ApplicationLoadBalancerFrontend#application_load_balancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#name ApplicationLoadBalancerFrontend#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#id ApplicationLoadBalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#tags ApplicationLoadBalancerFrontend#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendConfig.property.timeouts"></a>

```csharp
public ApplicationLoadBalancerFrontendTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts">ApplicationLoadBalancerFrontendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#timeouts ApplicationLoadBalancerFrontend#timeouts}

---

### ApplicationLoadBalancerFrontendTimeouts <a name="ApplicationLoadBalancerFrontendTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationLoadBalancerFrontendTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#create ApplicationLoadBalancerFrontend#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#delete ApplicationLoadBalancerFrontend#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#read ApplicationLoadBalancerFrontend#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#update ApplicationLoadBalancerFrontend#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#create ApplicationLoadBalancerFrontend#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#delete ApplicationLoadBalancerFrontend#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#read ApplicationLoadBalancerFrontend#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/application_load_balancer_frontend#update ApplicationLoadBalancerFrontend#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadBalancerFrontendTimeoutsOutputReference <a name="ApplicationLoadBalancerFrontendTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationLoadBalancerFrontendTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationLoadBalancerFrontend.ApplicationLoadBalancerFrontendTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



