# `azurerm_orbital_contact_profile`

Refer to the Terraform Registory for docs: [`azurerm_orbital_contact_profile`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile).

# `orbitalContactProfile` Submodule <a name="`orbitalContactProfile` Submodule" id="@cdktf/provider-azurerm.orbitalContactProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrbitalContactProfile <a name="OrbitalContactProfile" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile azurerm_orbital_contact_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfile(Construct Scope, string Id, OrbitalContactProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig">OrbitalContactProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig">OrbitalContactProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetEventHubUri">ResetEventHubUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetMinimumElevationDegrees">ResetMinimumElevationDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks"></a>

```csharp
private void PutLinks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(OrbitalContactProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

---

##### `ResetEventHubUri` <a name="ResetEventHubUri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetEventHubUri"></a>

```csharp
private void ResetEventHubUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinimumElevationDegrees` <a name="ResetMinimumElevationDegrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetMinimumElevationDegrees"></a>

```csharp
private void ResetMinimumElevationDegrees()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrbitalContactProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrbitalContactProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrbitalContactProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.links">Links</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList">OrbitalContactProfileLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference">OrbitalContactProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTrackingInput">AutoTrackingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUriInput">EventHubUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.linksInput">LinksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegreesInput">MinimumElevationDegreesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDurationInput">MinimumVariableContactDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetIdInput">NetworkConfigurationSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTracking">AutoTracking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUri">EventHubUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegrees">MinimumElevationDegrees</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDuration">MinimumVariableContactDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetId">NetworkConfigurationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.links"></a>

```csharp
public OrbitalContactProfileLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList">OrbitalContactProfileLinksList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeouts"></a>

```csharp
public OrbitalContactProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference">OrbitalContactProfileTimeoutsOutputReference</a>

---

##### `AutoTrackingInput`<sup>Optional</sup> <a name="AutoTrackingInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTrackingInput"></a>

```csharp
public string AutoTrackingInput { get; }
```

- *Type:* string

---

##### `EventHubUriInput`<sup>Optional</sup> <a name="EventHubUriInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUriInput"></a>

```csharp
public string EventHubUriInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.linksInput"></a>

```csharp
public object LinksInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinimumElevationDegreesInput`<sup>Optional</sup> <a name="MinimumElevationDegreesInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegreesInput"></a>

```csharp
public double MinimumElevationDegreesInput { get; }
```

- *Type:* double

---

##### `MinimumVariableContactDurationInput`<sup>Optional</sup> <a name="MinimumVariableContactDurationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDurationInput"></a>

```csharp
public string MinimumVariableContactDurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationSubnetIdInput`<sup>Optional</sup> <a name="NetworkConfigurationSubnetIdInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetIdInput"></a>

```csharp
public string NetworkConfigurationSubnetIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoTracking`<sup>Required</sup> <a name="AutoTracking" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTracking"></a>

```csharp
public string AutoTracking { get; }
```

- *Type:* string

---

##### `EventHubUri`<sup>Required</sup> <a name="EventHubUri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUri"></a>

```csharp
public string EventHubUri { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinimumElevationDegrees`<sup>Required</sup> <a name="MinimumElevationDegrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegrees"></a>

```csharp
public double MinimumElevationDegrees { get; }
```

- *Type:* double

---

##### `MinimumVariableContactDuration`<sup>Required</sup> <a name="MinimumVariableContactDuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDuration"></a>

```csharp
public string MinimumVariableContactDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConfigurationSubnetId`<sup>Required</sup> <a name="NetworkConfigurationSubnetId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetId"></a>

```csharp
public string NetworkConfigurationSubnetId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrbitalContactProfileConfig <a name="OrbitalContactProfileConfig" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutoTracking,
    object Links,
    string Location,
    string MinimumVariableContactDuration,
    string Name,
    string NetworkConfigurationSubnetId,
    string ResourceGroupName,
    string EventHubUri = null,
    string Id = null,
    double MinimumElevationDegrees = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    OrbitalContactProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.autoTracking">AutoTracking</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.links">Links</a></code> | <code>object</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumVariableContactDuration">MinimumVariableContactDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.networkConfigurationSubnetId">NetworkConfigurationSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.eventHubUri">EventHubUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumElevationDegrees">MinimumElevationDegrees</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoTracking`<sup>Required</sup> <a name="AutoTracking" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.autoTracking"></a>

```csharp
public string AutoTracking { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}.

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.links"></a>

```csharp
public object Links { get; set; }
```

- *Type:* object

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#links OrbitalContactProfile#links}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}.

---

##### `MinimumVariableContactDuration`<sup>Required</sup> <a name="MinimumVariableContactDuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumVariableContactDuration"></a>

```csharp
public string MinimumVariableContactDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `NetworkConfigurationSubnetId`<sup>Required</sup> <a name="NetworkConfigurationSubnetId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.networkConfigurationSubnetId"></a>

```csharp
public string NetworkConfigurationSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}.

---

##### `EventHubUri`<sup>Optional</sup> <a name="EventHubUri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.eventHubUri"></a>

```csharp
public string EventHubUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumElevationDegrees`<sup>Optional</sup> <a name="MinimumElevationDegrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumElevationDegrees"></a>

```csharp
public double MinimumElevationDegrees { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.timeouts"></a>

```csharp
public OrbitalContactProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#timeouts OrbitalContactProfile#timeouts}

---

### OrbitalContactProfileLinks <a name="OrbitalContactProfileLinks" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinks {
    object Channels,
    string Direction,
    string Name,
    string Polarization
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.channels">Channels</a></code> | <code>object</code> | channels block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#direction OrbitalContactProfile#direction}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.polarization">Polarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#polarization OrbitalContactProfile#polarization}. |

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.channels"></a>

```csharp
public object Channels { get; set; }
```

- *Type:* object

channels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#channels OrbitalContactProfile#channels}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#direction OrbitalContactProfile#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.polarization"></a>

```csharp
public string Polarization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#polarization OrbitalContactProfile#polarization}.

---

### OrbitalContactProfileLinksChannels <a name="OrbitalContactProfileLinksChannels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksChannels {
    double BandwidthMhz,
    double CenterFrequencyMhz,
    object EndPoint,
    string Name,
    string DemodulationConfiguration = null,
    string ModulationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.bandwidthMhz">BandwidthMhz</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#bandwidth_mhz OrbitalContactProfile#bandwidth_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.centerFrequencyMhz">CenterFrequencyMhz</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#center_frequency_mhz OrbitalContactProfile#center_frequency_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.endPoint">EndPoint</a></code> | <code>object</code> | end_point block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.demodulationConfiguration">DemodulationConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#demodulation_configuration OrbitalContactProfile#demodulation_configuration}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.modulationConfiguration">ModulationConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#modulation_configuration OrbitalContactProfile#modulation_configuration}. |

---

##### `BandwidthMhz`<sup>Required</sup> <a name="BandwidthMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.bandwidthMhz"></a>

```csharp
public double BandwidthMhz { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#bandwidth_mhz OrbitalContactProfile#bandwidth_mhz}.

---

##### `CenterFrequencyMhz`<sup>Required</sup> <a name="CenterFrequencyMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.centerFrequencyMhz"></a>

```csharp
public double CenterFrequencyMhz { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#center_frequency_mhz OrbitalContactProfile#center_frequency_mhz}.

---

##### `EndPoint`<sup>Required</sup> <a name="EndPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.endPoint"></a>

```csharp
public object EndPoint { get; set; }
```

- *Type:* object

end_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#end_point OrbitalContactProfile#end_point}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `DemodulationConfiguration`<sup>Optional</sup> <a name="DemodulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.demodulationConfiguration"></a>

```csharp
public string DemodulationConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#demodulation_configuration OrbitalContactProfile#demodulation_configuration}.

---

##### `ModulationConfiguration`<sup>Optional</sup> <a name="ModulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.modulationConfiguration"></a>

```csharp
public string ModulationConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#modulation_configuration OrbitalContactProfile#modulation_configuration}.

---

### OrbitalContactProfileLinksChannelsEndPoint <a name="OrbitalContactProfileLinksChannelsEndPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksChannelsEndPoint {
    string EndPointName,
    string Port,
    string Protocol,
    string IpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.endPointName">EndPointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#end_point_name OrbitalContactProfile#end_point_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#port OrbitalContactProfile#port}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#protocol OrbitalContactProfile#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#ip_address OrbitalContactProfile#ip_address}. |

---

##### `EndPointName`<sup>Required</sup> <a name="EndPointName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.endPointName"></a>

```csharp
public string EndPointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#end_point_name OrbitalContactProfile#end_point_name}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#port OrbitalContactProfile#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#protocol OrbitalContactProfile#protocol}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#ip_address OrbitalContactProfile#ip_address}.

---

### OrbitalContactProfileTimeouts <a name="OrbitalContactProfileTimeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrbitalContactProfileLinksChannelsEndPointList <a name="OrbitalContactProfileLinksChannelsEndPointList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksChannelsEndPointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get"></a>

```csharp
private OrbitalContactProfileLinksChannelsEndPointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalContactProfileLinksChannelsEndPointOutputReference <a name="OrbitalContactProfileLinksChannelsEndPointOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksChannelsEndPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointNameInput">EndPointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointName">EndPointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPointNameInput`<sup>Optional</sup> <a name="EndPointNameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointNameInput"></a>

```csharp
public string EndPointNameInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `EndPointName`<sup>Required</sup> <a name="EndPointName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointName"></a>

```csharp
public string EndPointName { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalContactProfileLinksChannelsList <a name="OrbitalContactProfileLinksChannelsList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksChannelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get"></a>

```csharp
private OrbitalContactProfileLinksChannelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalContactProfileLinksChannelsOutputReference <a name="OrbitalContactProfileLinksChannelsOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksChannelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint">PutEndPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetDemodulationConfiguration">ResetDemodulationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetModulationConfiguration">ResetModulationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndPoint` <a name="PutEndPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint"></a>

```csharp
private void PutEndPoint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint.parameter.value"></a>

- *Type:* object

---

##### `ResetDemodulationConfiguration` <a name="ResetDemodulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetDemodulationConfiguration"></a>

```csharp
private void ResetDemodulationConfiguration()
```

##### `ResetModulationConfiguration` <a name="ResetModulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetModulationConfiguration"></a>

```csharp
private void ResetModulationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPoint">EndPoint</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList">OrbitalContactProfileLinksChannelsEndPointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhzInput">BandwidthMhzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhzInput">CenterFrequencyMhzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfigurationInput">DemodulationConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPointInput">EndPointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfigurationInput">ModulationConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhz">BandwidthMhz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhz">CenterFrequencyMhz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfiguration">DemodulationConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfiguration">ModulationConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPoint`<sup>Required</sup> <a name="EndPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPoint"></a>

```csharp
public OrbitalContactProfileLinksChannelsEndPointList EndPoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList">OrbitalContactProfileLinksChannelsEndPointList</a>

---

##### `BandwidthMhzInput`<sup>Optional</sup> <a name="BandwidthMhzInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhzInput"></a>

```csharp
public double BandwidthMhzInput { get; }
```

- *Type:* double

---

##### `CenterFrequencyMhzInput`<sup>Optional</sup> <a name="CenterFrequencyMhzInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhzInput"></a>

```csharp
public double CenterFrequencyMhzInput { get; }
```

- *Type:* double

---

##### `DemodulationConfigurationInput`<sup>Optional</sup> <a name="DemodulationConfigurationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfigurationInput"></a>

```csharp
public string DemodulationConfigurationInput { get; }
```

- *Type:* string

---

##### `EndPointInput`<sup>Optional</sup> <a name="EndPointInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPointInput"></a>

```csharp
public object EndPointInput { get; }
```

- *Type:* object

---

##### `ModulationConfigurationInput`<sup>Optional</sup> <a name="ModulationConfigurationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfigurationInput"></a>

```csharp
public string ModulationConfigurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BandwidthMhz`<sup>Required</sup> <a name="BandwidthMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhz"></a>

```csharp
public double BandwidthMhz { get; }
```

- *Type:* double

---

##### `CenterFrequencyMhz`<sup>Required</sup> <a name="CenterFrequencyMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhz"></a>

```csharp
public double CenterFrequencyMhz { get; }
```

- *Type:* double

---

##### `DemodulationConfiguration`<sup>Required</sup> <a name="DemodulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfiguration"></a>

```csharp
public string DemodulationConfiguration { get; }
```

- *Type:* string

---

##### `ModulationConfiguration`<sup>Required</sup> <a name="ModulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfiguration"></a>

```csharp
public string ModulationConfiguration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalContactProfileLinksList <a name="OrbitalContactProfileLinksList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get"></a>

```csharp
private OrbitalContactProfileLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalContactProfileLinksOutputReference <a name="OrbitalContactProfileLinksOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels">PutChannels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChannels` <a name="PutChannels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels"></a>

```csharp
private void PutChannels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channels">Channels</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList">OrbitalContactProfileLinksChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channelsInput">ChannelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarizationInput">PolarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarization">Polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channels"></a>

```csharp
public OrbitalContactProfileLinksChannelsList Channels { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList">OrbitalContactProfileLinksChannelsList</a>

---

##### `ChannelsInput`<sup>Optional</sup> <a name="ChannelsInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channelsInput"></a>

```csharp
public object ChannelsInput { get; }
```

- *Type:* object

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolarizationInput`<sup>Optional</sup> <a name="PolarizationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarizationInput"></a>

```csharp
public string PolarizationInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarization"></a>

```csharp
public string Polarization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalContactProfileTimeoutsOutputReference <a name="OrbitalContactProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalContactProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



