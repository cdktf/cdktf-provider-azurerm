# `webApplicationFirewallPolicy` Submodule <a name="`webApplicationFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebApplicationFirewallPolicy <a name="WebApplicationFirewallPolicy" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy azurerm_web_application_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicy(Construct Scope, string Id, WebApplicationFirewallPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig">WebApplicationFirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig">WebApplicationFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules">PutCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules">PutManagedRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings">PutPolicySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetCustomRules">ResetCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetPolicySettings">ResetPolicySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomRules` <a name="PutCustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules"></a>

```csharp
private void PutCustomRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putCustomRules.parameter.value"></a>

- *Type:* object

---

##### `PutManagedRules` <a name="PutManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules"></a>

```csharp
private void PutManagedRules(WebApplicationFirewallPolicyManagedRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putManagedRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---

##### `PutPolicySettings` <a name="PutPolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings"></a>

```csharp
private void PutPolicySettings(WebApplicationFirewallPolicyPolicySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putPolicySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(WebApplicationFirewallPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>

---

##### `ResetCustomRules` <a name="ResetCustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetCustomRules"></a>

```csharp
private void ResetCustomRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicySettings` <a name="ResetPolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetPolicySettings"></a>

```csharp
private void ResetPolicySettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WebApplicationFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebApplicationFirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebApplicationFirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebApplicationFirewallPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebApplicationFirewallPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WebApplicationFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebApplicationFirewallPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebApplicationFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WebApplicationFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRules">CustomRules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList">WebApplicationFirewallPolicyCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.httpListenerIds">HttpListenerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRules">ManagedRules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference">WebApplicationFirewallPolicyManagedRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.pathBasedRuleIds">PathBasedRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettings">PolicySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference">WebApplicationFirewallPolicyPolicySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference">WebApplicationFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRulesInput">CustomRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRulesInput">ManagedRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettingsInput">PolicySettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomRules`<sup>Required</sup> <a name="CustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRules"></a>

```csharp
public WebApplicationFirewallPolicyCustomRulesList CustomRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList">WebApplicationFirewallPolicyCustomRulesList</a>

---

##### `HttpListenerIds`<sup>Required</sup> <a name="HttpListenerIds" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.httpListenerIds"></a>

```csharp
public string[] HttpListenerIds { get; }
```

- *Type:* string[]

---

##### `ManagedRules`<sup>Required</sup> <a name="ManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRules"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesOutputReference ManagedRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference">WebApplicationFirewallPolicyManagedRulesOutputReference</a>

---

##### `PathBasedRuleIds`<sup>Required</sup> <a name="PathBasedRuleIds" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.pathBasedRuleIds"></a>

```csharp
public string[] PathBasedRuleIds { get; }
```

- *Type:* string[]

---

##### `PolicySettings`<sup>Required</sup> <a name="PolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettings"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettingsOutputReference PolicySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference">WebApplicationFirewallPolicyPolicySettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeouts"></a>

```csharp
public WebApplicationFirewallPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference">WebApplicationFirewallPolicyTimeoutsOutputReference</a>

---

##### `CustomRulesInput`<sup>Optional</sup> <a name="CustomRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.customRulesInput"></a>

```csharp
public object CustomRulesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedRulesInput`<sup>Optional</sup> <a name="ManagedRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.managedRulesInput"></a>

```csharp
public WebApplicationFirewallPolicyManagedRules ManagedRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicySettingsInput`<sup>Optional</sup> <a name="PolicySettingsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.policySettingsInput"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettings PolicySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebApplicationFirewallPolicyConfig <a name="WebApplicationFirewallPolicyConfig" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    WebApplicationFirewallPolicyManagedRules ManagedRules,
    string Name,
    string ResourceGroupName,
    object CustomRules = null,
    string Id = null,
    WebApplicationFirewallPolicyPolicySettings PolicySettings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WebApplicationFirewallPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.managedRules">ManagedRules</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | managed_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.customRules">CustomRules</a></code> | <code>object</code> | custom_rules block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.policySettings">PolicySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | policy_settings block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#location WebApplicationFirewallPolicy#location}.

---

##### `ManagedRules`<sup>Required</sup> <a name="ManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.managedRules"></a>

```csharp
public WebApplicationFirewallPolicyManagedRules ManagedRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

managed_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#managed_rules WebApplicationFirewallPolicy#managed_rules}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#resource_group_name WebApplicationFirewallPolicy#resource_group_name}.

---

##### `CustomRules`<sup>Optional</sup> <a name="CustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.customRules"></a>

```csharp
public object CustomRules { get; set; }
```

- *Type:* object

custom_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#custom_rules WebApplicationFirewallPolicy#custom_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicySettings`<sup>Optional</sup> <a name="PolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.policySettings"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettings PolicySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

policy_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#policy_settings WebApplicationFirewallPolicy#policy_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#tags WebApplicationFirewallPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyConfig.property.timeouts"></a>

```csharp
public WebApplicationFirewallPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts">WebApplicationFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#timeouts WebApplicationFirewallPolicy#timeouts}

---

### WebApplicationFirewallPolicyCustomRules <a name="WebApplicationFirewallPolicyCustomRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRules {
    string Action,
    object MatchConditions,
    double Priority,
    string RuleType,
    object Enabled = null,
    string GroupRateLimitBy = null,
    string Name = null,
    string RateLimitDuration = null,
    double RateLimitThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.matchConditions">MatchConditions</a></code> | <code>object</code> | match_conditions block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.ruleType">RuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.groupRateLimitBy">GroupRateLimitBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#group_rate_limit_by WebApplicationFirewallPolicy#group_rate_limit_by}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitDuration">RateLimitDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rate_limit_duration WebApplicationFirewallPolicy#rate_limit_duration}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rate_limit_threshold WebApplicationFirewallPolicy#rate_limit_threshold}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}.

---

##### `MatchConditions`<sup>Required</sup> <a name="MatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.matchConditions"></a>

```csharp
public object MatchConditions { get; set; }
```

- *Type:* object

match_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_conditions WebApplicationFirewallPolicy#match_conditions}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#priority WebApplicationFirewallPolicy#priority}.

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.ruleType"></a>

```csharp
public string RuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_type WebApplicationFirewallPolicy#rule_type}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `GroupRateLimitBy`<sup>Optional</sup> <a name="GroupRateLimitBy" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.groupRateLimitBy"></a>

```csharp
public string GroupRateLimitBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#group_rate_limit_by WebApplicationFirewallPolicy#group_rate_limit_by}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#name WebApplicationFirewallPolicy#name}.

---

##### `RateLimitDuration`<sup>Optional</sup> <a name="RateLimitDuration" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitDuration"></a>

```csharp
public string RateLimitDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rate_limit_duration WebApplicationFirewallPolicy#rate_limit_duration}.

---

##### `RateLimitThreshold`<sup>Optional</sup> <a name="RateLimitThreshold" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRules.property.rateLimitThreshold"></a>

```csharp
public double RateLimitThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rate_limit_threshold WebApplicationFirewallPolicy#rate_limit_threshold}.

---

### WebApplicationFirewallPolicyCustomRulesMatchConditions <a name="WebApplicationFirewallPolicyCustomRulesMatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesMatchConditions {
    object MatchVariables,
    string Operator,
    string[] MatchValues = null,
    object NegationCondition = null,
    string[] Transforms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchVariables">MatchVariables</a></code> | <code>object</code> | match_variables block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchValues">MatchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.negationCondition">NegationCondition</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.transforms">Transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}. |

---

##### `MatchVariables`<sup>Required</sup> <a name="MatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchVariables"></a>

```csharp
public object MatchVariables { get; set; }
```

- *Type:* object

match_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_variables WebApplicationFirewallPolicy#match_variables}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#operator WebApplicationFirewallPolicy#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.matchValues"></a>

```csharp
public string[] MatchValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_values WebApplicationFirewallPolicy#match_values}.

---

##### `NegationCondition`<sup>Optional</sup> <a name="NegationCondition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.negationCondition"></a>

```csharp
public object NegationCondition { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#negation_condition WebApplicationFirewallPolicy#negation_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditions.property.transforms"></a>

```csharp
public string[] Transforms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#transforms WebApplicationFirewallPolicy#transforms}.

---

### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables {
    string VariableName,
    string Selector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.variableName">VariableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.selector">Selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}. |

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.variableName"></a>

```csharp
public string VariableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#variable_name WebApplicationFirewallPolicy#variable_name}.

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariables.property.selector"></a>

```csharp
public string Selector { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}.

---

### WebApplicationFirewallPolicyManagedRules <a name="WebApplicationFirewallPolicyManagedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRules {
    object ManagedRuleSet,
    object Exclusion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.managedRuleSet">ManagedRuleSet</a></code> | <code>object</code> | managed_rule_set block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.exclusion">Exclusion</a></code> | <code>object</code> | exclusion block. |

---

##### `ManagedRuleSet`<sup>Required</sup> <a name="ManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.managedRuleSet"></a>

```csharp
public object ManagedRuleSet { get; set; }
```

- *Type:* object

managed_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#managed_rule_set WebApplicationFirewallPolicy#managed_rule_set}

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules.property.exclusion"></a>

```csharp
public object Exclusion { get; set; }
```

- *Type:* object

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#exclusion WebApplicationFirewallPolicy#exclusion}

---

### WebApplicationFirewallPolicyManagedRulesExclusion <a name="WebApplicationFirewallPolicyManagedRulesExclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusion {
    string MatchVariable,
    string Selector,
    string SelectorMatchOperator,
    WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet ExcludedRuleSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.matchVariable">MatchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selector">Selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selectorMatchOperator">SelectorMatchOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.excludedRuleSet">ExcludedRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | excluded_rule_set block. |

---

##### `MatchVariable`<sup>Required</sup> <a name="MatchVariable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.matchVariable"></a>

```csharp
public string MatchVariable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}.

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selector"></a>

```csharp
public string Selector { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}.

---

##### `SelectorMatchOperator`<sup>Required</sup> <a name="SelectorMatchOperator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.selectorMatchOperator"></a>

```csharp
public string SelectorMatchOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}.

---

##### `ExcludedRuleSet`<sup>Optional</sup> <a name="ExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusion.property.excludedRuleSet"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet ExcludedRuleSet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

excluded_rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#excluded_rule_set WebApplicationFirewallPolicy#excluded_rule_set}

---

### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet {
    object RuleGroup = null,
    string Type = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.ruleGroup">RuleGroup</a></code> | <code>object</code> | rule_group block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}. |

---

##### `RuleGroup`<sup>Optional</sup> <a name="RuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.ruleGroup"></a>

```csharp
public object RuleGroup { get; set; }
```

- *Type:* object

rule_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_group WebApplicationFirewallPolicy#rule_group}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}.

---

### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup {
    string RuleGroupName,
    string[] ExcludedRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.ruleGroupName">RuleGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.excludedRules">ExcludedRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#excluded_rules WebApplicationFirewallPolicy#excluded_rules}. |

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.ruleGroupName"></a>

```csharp
public string RuleGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}.

---

##### `ExcludedRules`<sup>Optional</sup> <a name="ExcludedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroup.property.excludedRules"></a>

```csharp
public string[] ExcludedRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#excluded_rules WebApplicationFirewallPolicy#excluded_rules}.

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSet <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSet {
    string Version,
    object RuleGroupOverride = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.ruleGroupOverride">RuleGroupOverride</a></code> | <code>object</code> | rule_group_override block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#version WebApplicationFirewallPolicy#version}.

---

##### `RuleGroupOverride`<sup>Optional</sup> <a name="RuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.ruleGroupOverride"></a>

```csharp
public object RuleGroupOverride { get; set; }
```

- *Type:* object

rule_group_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_group_override WebApplicationFirewallPolicy#rule_group_override}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSet.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#type WebApplicationFirewallPolicy#type}.

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride {
    string RuleGroupName,
    string[] DisabledRules = null,
    object Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.ruleGroupName">RuleGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.disabledRules">DisabledRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#disabled_rules WebApplicationFirewallPolicy#disabled_rules}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.ruleGroupName"></a>

```csharp
public string RuleGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule_group_name WebApplicationFirewallPolicy#rule_group_name}.

---

##### `DisabledRules`<sup>Optional</sup> <a name="DisabledRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.disabledRules"></a>

```csharp
public string[] DisabledRules { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#disabled_rules WebApplicationFirewallPolicy#disabled_rules}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverride.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}

---

### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule {
    string Id,
    string Action = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#id WebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#action WebApplicationFirewallPolicy#action}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRule.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

### WebApplicationFirewallPolicyPolicySettings <a name="WebApplicationFirewallPolicyPolicySettings" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyPolicySettings {
    object Enabled = null,
    double FileUploadLimitInMb = null,
    WebApplicationFirewallPolicyPolicySettingsLogScrubbing LogScrubbing = null,
    double MaxRequestBodySizeInKb = null,
    string Mode = null,
    object RequestBodyCheck = null,
    double RequestBodyInspectLimitInKb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadLimitInMb">FileUploadLimitInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.logScrubbing">LogScrubbing</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a></code> | log_scrubbing block. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.maxRequestBodySizeInKb">MaxRequestBodySizeInKb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyCheck">RequestBodyCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyInspectLimitInKb">RequestBodyInspectLimitInKb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#request_body_inspect_limit_in_kb WebApplicationFirewallPolicy#request_body_inspect_limit_in_kb}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `FileUploadLimitInMb`<sup>Optional</sup> <a name="FileUploadLimitInMb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.fileUploadLimitInMb"></a>

```csharp
public double FileUploadLimitInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#file_upload_limit_in_mb WebApplicationFirewallPolicy#file_upload_limit_in_mb}.

---

##### `LogScrubbing`<sup>Optional</sup> <a name="LogScrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.logScrubbing"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettingsLogScrubbing LogScrubbing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

log_scrubbing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#log_scrubbing WebApplicationFirewallPolicy#log_scrubbing}

---

##### `MaxRequestBodySizeInKb`<sup>Optional</sup> <a name="MaxRequestBodySizeInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.maxRequestBodySizeInKb"></a>

```csharp
public double MaxRequestBodySizeInKb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#max_request_body_size_in_kb WebApplicationFirewallPolicy#max_request_body_size_in_kb}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#mode WebApplicationFirewallPolicy#mode}.

---

##### `RequestBodyCheck`<sup>Optional</sup> <a name="RequestBodyCheck" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyCheck"></a>

```csharp
public object RequestBodyCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#request_body_check WebApplicationFirewallPolicy#request_body_check}.

---

##### `RequestBodyInspectLimitInKb`<sup>Optional</sup> <a name="RequestBodyInspectLimitInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings.property.requestBodyInspectLimitInKb"></a>

```csharp
public double RequestBodyInspectLimitInKb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#request_body_inspect_limit_in_kb WebApplicationFirewallPolicy#request_body_inspect_limit_in_kb}.

---

### WebApplicationFirewallPolicyPolicySettingsLogScrubbing <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyPolicySettingsLogScrubbing {
    object Enabled = null,
    object Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#rule WebApplicationFirewallPolicy#rule}

---

### WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule {
    string MatchVariable,
    object Enabled = null,
    string Selector = null,
    string SelectorMatchOperator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.matchVariable">MatchVariable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selector">Selector</a></code> | <code>string</code> | When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selectorMatchOperator">SelectorMatchOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}. |

---

##### `MatchVariable`<sup>Required</sup> <a name="MatchVariable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.matchVariable"></a>

```csharp
public string MatchVariable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#match_variable WebApplicationFirewallPolicy#match_variable}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#enabled WebApplicationFirewallPolicy#enabled}.

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selector"></a>

```csharp
public string Selector { get; set; }
```

- *Type:* string

When matchVariable is a collection, operator used to specify which elements in the collection this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector WebApplicationFirewallPolicy#selector}

---

##### `SelectorMatchOperator`<sup>Optional</sup> <a name="SelectorMatchOperator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRule.property.selectorMatchOperator"></a>

```csharp
public string SelectorMatchOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#selector_match_operator WebApplicationFirewallPolicy#selector_match_operator}.

---

### WebApplicationFirewallPolicyTimeouts <a name="WebApplicationFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#create WebApplicationFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#delete WebApplicationFirewallPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#read WebApplicationFirewallPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_application_firewall_policy#update WebApplicationFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebApplicationFirewallPolicyCustomRulesList <a name="WebApplicationFirewallPolicyCustomRulesList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get"></a>

```csharp
private WebApplicationFirewallPolicyCustomRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsList <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesMatchConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get"></a>

```csharp
private WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get"></a>

```csharp
private WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selectorInput">SelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableNameInput">VariableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableName">VariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selectorInput"></a>

```csharp
public string SelectorInput { get; }
```

- *Type:* string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableNameInput"></a>

```csharp
public string VariableNameInput { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.variableName"></a>

```csharp
public string VariableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference <a name="WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables">PutMatchVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetNegationCondition">ResetNegationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchVariables` <a name="PutMatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables"></a>

```csharp
private void PutMatchVariables(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.putMatchVariables.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetMatchValues"></a>

```csharp
private void ResetMatchValues()
```

##### `ResetNegationCondition` <a name="ResetNegationCondition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetNegationCondition"></a>

```csharp
private void ResetNegationCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.resetTransforms"></a>

```csharp
private void ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariables">MatchVariables</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariablesInput">MatchVariablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationConditionInput">NegationConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transformsInput">TransformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValues">MatchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationCondition">NegationCondition</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transforms">Transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchVariables`<sup>Required</sup> <a name="MatchVariables" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariables"></a>

```csharp
public WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList MatchVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList">WebApplicationFirewallPolicyCustomRulesMatchConditionsMatchVariablesList</a>

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValuesInput"></a>

```csharp
public string[] MatchValuesInput { get; }
```

- *Type:* string[]

---

##### `MatchVariablesInput`<sup>Optional</sup> <a name="MatchVariablesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchVariablesInput"></a>

```csharp
public object MatchVariablesInput { get; }
```

- *Type:* object

---

##### `NegationConditionInput`<sup>Optional</sup> <a name="NegationConditionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationConditionInput"></a>

```csharp
public object NegationConditionInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transformsInput"></a>

```csharp
public string[] TransformsInput { get; }
```

- *Type:* string[]

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.matchValues"></a>

```csharp
public string[] MatchValues { get; }
```

- *Type:* string[]

---

##### `NegationCondition`<sup>Required</sup> <a name="NegationCondition" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.negationCondition"></a>

```csharp
public object NegationCondition { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.transforms"></a>

```csharp
public string[] Transforms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyCustomRulesOutputReference <a name="WebApplicationFirewallPolicyCustomRulesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyCustomRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions">PutMatchConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetGroupRateLimitBy">ResetGroupRateLimitBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitDuration">ResetRateLimitDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitThreshold">ResetRateLimitThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchConditions` <a name="PutMatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions"></a>

```csharp
private void PutMatchConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.putMatchConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetGroupRateLimitBy` <a name="ResetGroupRateLimitBy" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetGroupRateLimitBy"></a>

```csharp
private void ResetGroupRateLimitBy()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRateLimitDuration` <a name="ResetRateLimitDuration" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitDuration"></a>

```csharp
private void ResetRateLimitDuration()
```

##### `ResetRateLimitThreshold` <a name="ResetRateLimitThreshold" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.resetRateLimitThreshold"></a>

```csharp
private void ResetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditions">MatchConditions</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList">WebApplicationFirewallPolicyCustomRulesMatchConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitByInput">GroupRateLimitByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditionsInput">MatchConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDurationInput">RateLimitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitBy">GroupRateLimitBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDuration">RateLimitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchConditions`<sup>Required</sup> <a name="MatchConditions" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditions"></a>

```csharp
public WebApplicationFirewallPolicyCustomRulesMatchConditionsList MatchConditions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesMatchConditionsList">WebApplicationFirewallPolicyCustomRulesMatchConditionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GroupRateLimitByInput`<sup>Optional</sup> <a name="GroupRateLimitByInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitByInput"></a>

```csharp
public string GroupRateLimitByInput { get; }
```

- *Type:* string

---

##### `MatchConditionsInput`<sup>Optional</sup> <a name="MatchConditionsInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.matchConditionsInput"></a>

```csharp
public object MatchConditionsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RateLimitDurationInput`<sup>Optional</sup> <a name="RateLimitDurationInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDurationInput"></a>

```csharp
public string RateLimitDurationInput { get; }
```

- *Type:* string

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThresholdInput"></a>

```csharp
public double RateLimitThresholdInput { get; }
```

- *Type:* double

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleTypeInput"></a>

```csharp
public string RuleTypeInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `GroupRateLimitBy`<sup>Required</sup> <a name="GroupRateLimitBy" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.groupRateLimitBy"></a>

```csharp
public string GroupRateLimitBy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RateLimitDuration`<sup>Required</sup> <a name="RateLimitDuration" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitDuration"></a>

```csharp
public string RateLimitDuration { get; }
```

- *Type:* string

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.rateLimitThreshold"></a>

```csharp
public double RateLimitThreshold { get; }
```

- *Type:* double

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyCustomRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup">PutRuleGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetRuleGroup">ResetRuleGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleGroup` <a name="PutRuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup"></a>

```csharp
private void PutRuleGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.putRuleGroup.parameter.value"></a>

- *Type:* object

---

##### `ResetRuleGroup` <a name="ResetRuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetRuleGroup"></a>

```csharp
private void ResetRuleGroup()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroup">RuleGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroupInput">RuleGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleGroup`<sup>Required</sup> <a name="RuleGroup" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroup"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList RuleGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList</a>

---

##### `RuleGroupInput`<sup>Optional</sup> <a name="RuleGroupInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.ruleGroupInput"></a>

```csharp
public object RuleGroupInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference.property.internalValue"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get"></a>

```csharp
private WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resetExcludedRules">ResetExcludedRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedRules` <a name="ResetExcludedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.resetExcludedRules"></a>

```csharp
private void ResetExcludedRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRulesInput">ExcludedRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupNameInput">RuleGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRules">ExcludedRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupName">RuleGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedRulesInput`<sup>Optional</sup> <a name="ExcludedRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRulesInput"></a>

```csharp
public string[] ExcludedRulesInput { get; }
```

- *Type:* string[]

---

##### `RuleGroupNameInput`<sup>Optional</sup> <a name="RuleGroupNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupNameInput"></a>

```csharp
public string RuleGroupNameInput { get; }
```

- *Type:* string

---

##### `ExcludedRules`<sup>Required</sup> <a name="ExcludedRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.excludedRules"></a>

```csharp
public string[] ExcludedRules { get; }
```

- *Type:* string[]

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.ruleGroupName"></a>

```csharp
public string RuleGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetRuleGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesExclusionList <a name="WebApplicationFirewallPolicyManagedRulesExclusionList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get"></a>

```csharp
private WebApplicationFirewallPolicyManagedRulesExclusionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesExclusionOutputReference <a name="WebApplicationFirewallPolicyManagedRulesExclusionOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesExclusionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet">PutExcludedRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resetExcludedRuleSet">ResetExcludedRuleSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedRuleSet` <a name="PutExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet"></a>

```csharp
private void PutExcludedRuleSet(WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.putExcludedRuleSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---

##### `ResetExcludedRuleSet` <a name="ResetExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.resetExcludedRuleSet"></a>

```csharp
private void ResetExcludedRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSet">ExcludedRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSetInput">ExcludedRuleSetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariableInput">MatchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorInput">SelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperatorInput">SelectorMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariable">MatchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperator">SelectorMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedRuleSet`<sup>Required</sup> <a name="ExcludedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSet"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference ExcludedRuleSet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSetOutputReference</a>

---

##### `ExcludedRuleSetInput`<sup>Optional</sup> <a name="ExcludedRuleSetInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.excludedRuleSetInput"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet ExcludedRuleSetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet">WebApplicationFirewallPolicyManagedRulesExclusionExcludedRuleSet</a>

---

##### `MatchVariableInput`<sup>Optional</sup> <a name="MatchVariableInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariableInput"></a>

```csharp
public string MatchVariableInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorInput"></a>

```csharp
public string SelectorInput { get; }
```

- *Type:* string

---

##### `SelectorMatchOperatorInput`<sup>Optional</sup> <a name="SelectorMatchOperatorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperatorInput"></a>

```csharp
public string SelectorMatchOperatorInput { get; }
```

- *Type:* string

---

##### `MatchVariable`<sup>Required</sup> <a name="MatchVariable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.matchVariable"></a>

```csharp
public string MatchVariable { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `SelectorMatchOperator`<sup>Required</sup> <a name="SelectorMatchOperator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.selectorMatchOperator"></a>

```csharp
public string SelectorMatchOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get"></a>

```csharp
private WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride">PutRuleGroupOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetRuleGroupOverride">ResetRuleGroupOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleGroupOverride` <a name="PutRuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride"></a>

```csharp
private void PutRuleGroupOverride(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.putRuleGroupOverride.parameter.value"></a>

- *Type:* object

---

##### `ResetRuleGroupOverride` <a name="ResetRuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetRuleGroupOverride"></a>

```csharp
private void ResetRuleGroupOverride()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverride">RuleGroupOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverrideInput">RuleGroupOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleGroupOverride`<sup>Required</sup> <a name="RuleGroupOverride" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverride"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList RuleGroupOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList</a>

---

##### `RuleGroupOverrideInput`<sup>Optional</sup> <a name="RuleGroupOverrideInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.ruleGroupOverrideInput"></a>

```csharp
public object RuleGroupOverrideInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get"></a>

```csharp
private WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetDisabledRules">ResetDisabledRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetDisabledRules` <a name="ResetDisabledRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetDisabledRules"></a>

```csharp
private void ResetDisabledRules()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRulesInput">DisabledRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupNameInput">RuleGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRules">DisabledRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupName">RuleGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.rule"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList</a>

---

##### `DisabledRulesInput`<sup>Optional</sup> <a name="DisabledRulesInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRulesInput"></a>

```csharp
public string[] DisabledRulesInput { get; }
```

- *Type:* string[]

---

##### `RuleGroupNameInput`<sup>Optional</sup> <a name="RuleGroupNameInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupNameInput"></a>

```csharp
public string RuleGroupNameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `DisabledRules`<sup>Required</sup> <a name="DisabledRules" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.disabledRules"></a>

```csharp
public string[] DisabledRules { get; }
```

- *Type:* string[]

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.ruleGroupName"></a>

```csharp
public string RuleGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get"></a>

```csharp
private WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference <a name="WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetRuleGroupOverrideRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyManagedRulesOutputReference <a name="WebApplicationFirewallPolicyManagedRulesOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyManagedRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet">PutManagedRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion"></a>

```csharp
private void PutExclusion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putExclusion.parameter.value"></a>

- *Type:* object

---

##### `PutManagedRuleSet` <a name="PutManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet"></a>

```csharp
private void PutManagedRuleSet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.putManagedRuleSet.parameter.value"></a>

- *Type:* object

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.resetExclusion"></a>

```csharp
private void ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList">WebApplicationFirewallPolicyManagedRulesExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSet">ManagedRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSetInput">ManagedRuleSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusion"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesExclusionList Exclusion { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesExclusionList">WebApplicationFirewallPolicyManagedRulesExclusionList</a>

---

##### `ManagedRuleSet`<sup>Required</sup> <a name="ManagedRuleSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSet"></a>

```csharp
public WebApplicationFirewallPolicyManagedRulesManagedRuleSetList ManagedRuleSet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesManagedRuleSetList">WebApplicationFirewallPolicyManagedRulesManagedRuleSetList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.exclusionInput"></a>

```csharp
public object ExclusionInput { get; }
```

- *Type:* object

---

##### `ManagedRuleSetInput`<sup>Optional</sup> <a name="ManagedRuleSetInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.managedRuleSetInput"></a>

```csharp
public object ManagedRuleSetInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRulesOutputReference.property.internalValue"></a>

```csharp
public WebApplicationFirewallPolicyManagedRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyManagedRules">WebApplicationFirewallPolicyManagedRules</a>

---


### WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.rule"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList">WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference.property.internalValue"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettingsLogScrubbing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

---


### WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.get"></a>

```csharp
private WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference <a name="WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelectorMatchOperator">ResetSelectorMatchOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetSelectorMatchOperator` <a name="ResetSelectorMatchOperator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.resetSelectorMatchOperator"></a>

```csharp
private void ResetSelectorMatchOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariableInput">MatchVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorInput">SelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperatorInput">SelectorMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariable">MatchVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selector">Selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperator">SelectorMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `MatchVariableInput`<sup>Optional</sup> <a name="MatchVariableInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariableInput"></a>

```csharp
public string MatchVariableInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorInput"></a>

```csharp
public string SelectorInput { get; }
```

- *Type:* string

---

##### `SelectorMatchOperatorInput`<sup>Optional</sup> <a name="SelectorMatchOperatorInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperatorInput"></a>

```csharp
public string SelectorMatchOperatorInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `MatchVariable`<sup>Required</sup> <a name="MatchVariable" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.matchVariable"></a>

```csharp
public string MatchVariable { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selector"></a>

```csharp
public string Selector { get; }
```

- *Type:* string

---

##### `SelectorMatchOperator`<sup>Required</sup> <a name="SelectorMatchOperator" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.selectorMatchOperator"></a>

```csharp
public string SelectorMatchOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebApplicationFirewallPolicyPolicySettingsOutputReference <a name="WebApplicationFirewallPolicyPolicySettingsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyPolicySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.putLogScrubbing">PutLogScrubbing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadLimitInMb">ResetFileUploadLimitInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetLogScrubbing">ResetLogScrubbing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMaxRequestBodySizeInKb">ResetMaxRequestBodySizeInKb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyCheck">ResetRequestBodyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyInspectLimitInKb">ResetRequestBodyInspectLimitInKb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogScrubbing` <a name="PutLogScrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.putLogScrubbing"></a>

```csharp
private void PutLogScrubbing(WebApplicationFirewallPolicyPolicySettingsLogScrubbing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.putLogScrubbing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFileUploadLimitInMb` <a name="ResetFileUploadLimitInMb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetFileUploadLimitInMb"></a>

```csharp
private void ResetFileUploadLimitInMb()
```

##### `ResetLogScrubbing` <a name="ResetLogScrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetLogScrubbing"></a>

```csharp
private void ResetLogScrubbing()
```

##### `ResetMaxRequestBodySizeInKb` <a name="ResetMaxRequestBodySizeInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMaxRequestBodySizeInKb"></a>

```csharp
private void ResetMaxRequestBodySizeInKb()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetRequestBodyCheck` <a name="ResetRequestBodyCheck" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyCheck"></a>

```csharp
private void ResetRequestBodyCheck()
```

##### `ResetRequestBodyInspectLimitInKb` <a name="ResetRequestBodyInspectLimitInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.resetRequestBodyInspectLimitInKb"></a>

```csharp
private void ResetRequestBodyInspectLimitInKb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbing">LogScrubbing</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference">WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMbInput">FileUploadLimitInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbingInput">LogScrubbingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKbInput">MaxRequestBodySizeInKbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheckInput">RequestBodyCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKbInput">RequestBodyInspectLimitInKbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMb">FileUploadLimitInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKb">MaxRequestBodySizeInKb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheck">RequestBodyCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKb">RequestBodyInspectLimitInKb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogScrubbing`<sup>Required</sup> <a name="LogScrubbing" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbing"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference LogScrubbing { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference">WebApplicationFirewallPolicyPolicySettingsLogScrubbingOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FileUploadLimitInMbInput`<sup>Optional</sup> <a name="FileUploadLimitInMbInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMbInput"></a>

```csharp
public double FileUploadLimitInMbInput { get; }
```

- *Type:* double

---

##### `LogScrubbingInput`<sup>Optional</sup> <a name="LogScrubbingInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.logScrubbingInput"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettingsLogScrubbing LogScrubbingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsLogScrubbing">WebApplicationFirewallPolicyPolicySettingsLogScrubbing</a>

---

##### `MaxRequestBodySizeInKbInput`<sup>Optional</sup> <a name="MaxRequestBodySizeInKbInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKbInput"></a>

```csharp
public double MaxRequestBodySizeInKbInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `RequestBodyCheckInput`<sup>Optional</sup> <a name="RequestBodyCheckInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheckInput"></a>

```csharp
public object RequestBodyCheckInput { get; }
```

- *Type:* object

---

##### `RequestBodyInspectLimitInKbInput`<sup>Optional</sup> <a name="RequestBodyInspectLimitInKbInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKbInput"></a>

```csharp
public double RequestBodyInspectLimitInKbInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FileUploadLimitInMb`<sup>Required</sup> <a name="FileUploadLimitInMb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.fileUploadLimitInMb"></a>

```csharp
public double FileUploadLimitInMb { get; }
```

- *Type:* double

---

##### `MaxRequestBodySizeInKb`<sup>Required</sup> <a name="MaxRequestBodySizeInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.maxRequestBodySizeInKb"></a>

```csharp
public double MaxRequestBodySizeInKb { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RequestBodyCheck`<sup>Required</sup> <a name="RequestBodyCheck" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyCheck"></a>

```csharp
public object RequestBodyCheck { get; }
```

- *Type:* object

---

##### `RequestBodyInspectLimitInKb`<sup>Required</sup> <a name="RequestBodyInspectLimitInKb" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.requestBodyInspectLimitInKb"></a>

```csharp
public double RequestBodyInspectLimitInKb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettingsOutputReference.property.internalValue"></a>

```csharp
public WebApplicationFirewallPolicyPolicySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyPolicySettings">WebApplicationFirewallPolicyPolicySettings</a>

---


### WebApplicationFirewallPolicyTimeoutsOutputReference <a name="WebApplicationFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebApplicationFirewallPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webApplicationFirewallPolicy.WebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



