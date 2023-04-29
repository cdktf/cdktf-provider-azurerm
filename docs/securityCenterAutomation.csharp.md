# `azurerm_security_center_automation`

Refer to the Terraform Registory for docs: [`azurerm_security_center_automation`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation).

# `securityCenterAutomation` Submodule <a name="`securityCenterAutomation` Submodule" id="@cdktf/provider-azurerm.securityCenterAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterAutomation <a name="SecurityCenterAutomation" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation azurerm_security_center_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomation(Construct Scope, string Id, SecurityCenterAutomationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig">SecurityCenterAutomationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig">SecurityCenterAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction"></a>

```csharp
private void PutAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource"></a>

```csharp
private void PutSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityCenterAutomationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterAutomation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterAutomation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterAutomation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList">SecurityCenterAutomationActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList">SecurityCenterAutomationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference">SecurityCenterAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.actionInput">ActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.action"></a>

```csharp
public SecurityCenterAutomationActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList">SecurityCenterAutomationActionList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.source"></a>

```csharp
public SecurityCenterAutomationSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList">SecurityCenterAutomationSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeouts"></a>

```csharp
public SecurityCenterAutomationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference">SecurityCenterAutomationTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.actionInput"></a>

```csharp
public object ActionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterAutomationAction <a name="SecurityCenterAutomationAction" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationAction {
    string ResourceId,
    string Type,
    string ConnectionString = null,
    string TriggerUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#resource_id SecurityCenterAutomation#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#type SecurityCenterAutomation#type}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#connection_string SecurityCenterAutomation#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.triggerUrl">TriggerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#trigger_url SecurityCenterAutomation#trigger_url}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#resource_id SecurityCenterAutomation#resource_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#type SecurityCenterAutomation#type}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#connection_string SecurityCenterAutomation#connection_string}.

---

##### `TriggerUrl`<sup>Optional</sup> <a name="TriggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.triggerUrl"></a>

```csharp
public string TriggerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#trigger_url SecurityCenterAutomation#trigger_url}.

---

### SecurityCenterAutomationConfig <a name="SecurityCenterAutomationConfig" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Action,
    string Location,
    string Name,
    string ResourceGroupName,
    string[] Scopes,
    object Source,
    string Description = null,
    object Enabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SecurityCenterAutomationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.action">Action</a></code> | <code>object</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.source">Source</a></code> | <code>object</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.action"></a>

```csharp
public object Action { get; set; }
```

- *Type:* object

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#action SecurityCenterAutomation#action}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}.

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.source"></a>

```csharp
public object Source { get; set; }
```

- *Type:* object

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#source SecurityCenterAutomation#source}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.timeouts"></a>

```csharp
public SecurityCenterAutomationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#timeouts SecurityCenterAutomation#timeouts}

---

### SecurityCenterAutomationSource <a name="SecurityCenterAutomationSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSource {
    string EventSource,
    object RuleSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.eventSource">EventSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#event_source SecurityCenterAutomation#event_source}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.ruleSet">RuleSet</a></code> | <code>object</code> | rule_set block. |

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.eventSource"></a>

```csharp
public string EventSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#event_source SecurityCenterAutomation#event_source}.

---

##### `RuleSet`<sup>Optional</sup> <a name="RuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.ruleSet"></a>

```csharp
public object RuleSet { get; set; }
```

- *Type:* object

rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#rule_set SecurityCenterAutomation#rule_set}

---

### SecurityCenterAutomationSourceRuleSet <a name="SecurityCenterAutomationSourceRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceRuleSet {
    object Rule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#rule SecurityCenterAutomation#rule}

---

### SecurityCenterAutomationSourceRuleSetRule <a name="SecurityCenterAutomationSourceRuleSetRule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceRuleSetRule {
    string ExpectedValue,
    string Operator,
    string PropertyPath,
    string PropertyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.expectedValue">ExpectedValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#expected_value SecurityCenterAutomation#expected_value}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#operator SecurityCenterAutomation#operator}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyPath">PropertyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#property_path SecurityCenterAutomation#property_path}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyType">PropertyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#property_type SecurityCenterAutomation#property_type}. |

---

##### `ExpectedValue`<sup>Required</sup> <a name="ExpectedValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.expectedValue"></a>

```csharp
public string ExpectedValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#expected_value SecurityCenterAutomation#expected_value}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#operator SecurityCenterAutomation#operator}.

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyPath"></a>

```csharp
public string PropertyPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#property_path SecurityCenterAutomation#property_path}.

---

##### `PropertyType`<sup>Required</sup> <a name="PropertyType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyType"></a>

```csharp
public string PropertyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#property_type SecurityCenterAutomation#property_type}.

---

### SecurityCenterAutomationTimeouts <a name="SecurityCenterAutomationTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#create SecurityCenterAutomation#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#delete SecurityCenterAutomation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#read SecurityCenterAutomation#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#update SecurityCenterAutomation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#create SecurityCenterAutomation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#delete SecurityCenterAutomation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#read SecurityCenterAutomation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/security_center_automation#update SecurityCenterAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterAutomationActionList <a name="SecurityCenterAutomationActionList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get"></a>

```csharp
private SecurityCenterAutomationActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationActionOutputReference <a name="SecurityCenterAutomationActionOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetTriggerUrl">ResetTriggerUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetTriggerUrl` <a name="ResetTriggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetTriggerUrl"></a>

```csharp
private void ResetTriggerUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrlInput">TriggerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrl">TriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TriggerUrlInput`<sup>Optional</sup> <a name="TriggerUrlInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrlInput"></a>

```csharp
public string TriggerUrlInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `TriggerUrl`<sup>Required</sup> <a name="TriggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrl"></a>

```csharp
public string TriggerUrl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationSourceList <a name="SecurityCenterAutomationSourceList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get"></a>

```csharp
private SecurityCenterAutomationSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationSourceOutputReference <a name="SecurityCenterAutomationSourceOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet">PutRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resetRuleSet">ResetRuleSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleSet` <a name="PutRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet"></a>

```csharp
private void PutRuleSet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet.parameter.value"></a>

- *Type:* object

---

##### `ResetRuleSet` <a name="ResetRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resetRuleSet"></a>

```csharp
private void ResetRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSet">RuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList">SecurityCenterAutomationSourceRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSetInput">RuleSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSource">EventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleSet`<sup>Required</sup> <a name="RuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSet"></a>

```csharp
public SecurityCenterAutomationSourceRuleSetList RuleSet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList">SecurityCenterAutomationSourceRuleSetList</a>

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSourceInput"></a>

```csharp
public string EventSourceInput { get; }
```

- *Type:* string

---

##### `RuleSetInput`<sup>Optional</sup> <a name="RuleSetInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSetInput"></a>

```csharp
public object RuleSetInput { get; }
```

- *Type:* object

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSource"></a>

```csharp
public string EventSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationSourceRuleSetList <a name="SecurityCenterAutomationSourceRuleSetList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceRuleSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get"></a>

```csharp
private SecurityCenterAutomationSourceRuleSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationSourceRuleSetOutputReference <a name="SecurityCenterAutomationSourceRuleSetOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceRuleSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule">PutRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList">SecurityCenterAutomationSourceRuleSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.rule"></a>

```csharp
public SecurityCenterAutomationSourceRuleSetRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList">SecurityCenterAutomationSourceRuleSetRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationSourceRuleSetRuleList <a name="SecurityCenterAutomationSourceRuleSetRuleList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceRuleSetRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get"></a>

```csharp
private SecurityCenterAutomationSourceRuleSetRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationSourceRuleSetRuleOutputReference <a name="SecurityCenterAutomationSourceRuleSetRuleOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationSourceRuleSetRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValueInput">ExpectedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPathInput">PropertyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyTypeInput">PropertyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValue">ExpectedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPath">PropertyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyType">PropertyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpectedValueInput`<sup>Optional</sup> <a name="ExpectedValueInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValueInput"></a>

```csharp
public string ExpectedValueInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PropertyPathInput`<sup>Optional</sup> <a name="PropertyPathInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPathInput"></a>

```csharp
public string PropertyPathInput { get; }
```

- *Type:* string

---

##### `PropertyTypeInput`<sup>Optional</sup> <a name="PropertyTypeInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyTypeInput"></a>

```csharp
public string PropertyTypeInput { get; }
```

- *Type:* string

---

##### `ExpectedValue`<sup>Required</sup> <a name="ExpectedValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValue"></a>

```csharp
public string ExpectedValue { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPath"></a>

```csharp
public string PropertyPath { get; }
```

- *Type:* string

---

##### `PropertyType`<sup>Required</sup> <a name="PropertyType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyType"></a>

```csharp
public string PropertyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityCenterAutomationTimeoutsOutputReference <a name="SecurityCenterAutomationTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterAutomationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



