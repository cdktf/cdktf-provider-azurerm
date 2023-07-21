# `azurerm_container_registry`

Refer to the Terraform Registory for docs: [`azurerm_container_registry`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry).

# `containerRegistry` Submodule <a name="`containerRegistry` Submodule" id="@cdktf/provider-azurerm.containerRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistry <a name="ContainerRegistry" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry azurerm_container_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistry(Construct Scope, string Id, ContainerRegistryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig">ContainerRegistryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig">ContainerRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications">PutGeoreplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet">PutNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTrustPolicy">PutTrustPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAnonymousPullEnabled">ResetAnonymousPullEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetDataEndpointEnabled">ResetDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetExportPolicyEnabled">ResetExportPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetGeoreplications">ResetGeoreplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassOption">ResetNetworkRuleBypassOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleSet">ResetNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetQuarantinePolicyEnabled">ResetQuarantinePolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTrustPolicy">ResetTrustPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetZoneRedundancyEnabled">ResetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption"></a>

```csharp
private void PutEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption.parameter.value"></a>

- *Type:* object

---

##### `PutGeoreplications` <a name="PutGeoreplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications"></a>

```csharp
private void PutGeoreplications(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity"></a>

```csharp
private void PutIdentity(ContainerRegistryIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---

##### `PutNetworkRuleSet` <a name="PutNetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet"></a>

```csharp
private void PutNetworkRuleSet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet.parameter.value"></a>

- *Type:* object

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putRetentionPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerRegistryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---

##### `PutTrustPolicy` <a name="PutTrustPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTrustPolicy"></a>

```csharp
private void PutTrustPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTrustPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAdminEnabled"></a>

```csharp
private void ResetAdminEnabled()
```

##### `ResetAnonymousPullEnabled` <a name="ResetAnonymousPullEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAnonymousPullEnabled"></a>

```csharp
private void ResetAnonymousPullEnabled()
```

##### `ResetDataEndpointEnabled` <a name="ResetDataEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetDataEndpointEnabled"></a>

```csharp
private void ResetDataEndpointEnabled()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetExportPolicyEnabled` <a name="ResetExportPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetExportPolicyEnabled"></a>

```csharp
private void ResetExportPolicyEnabled()
```

##### `ResetGeoreplications` <a name="ResetGeoreplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetGeoreplications"></a>

```csharp
private void ResetGeoreplications()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetNetworkRuleBypassOption` <a name="ResetNetworkRuleBypassOption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassOption"></a>

```csharp
private void ResetNetworkRuleBypassOption()
```

##### `ResetNetworkRuleSet` <a name="ResetNetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleSet"></a>

```csharp
private void ResetNetworkRuleSet()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetQuarantinePolicyEnabled` <a name="ResetQuarantinePolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetQuarantinePolicyEnabled"></a>

```csharp
private void ResetQuarantinePolicyEnabled()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrustPolicy` <a name="ResetTrustPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTrustPolicy"></a>

```csharp
private void ResetTrustPolicy()
```

##### `ResetZoneRedundancyEnabled` <a name="ResetZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetZoneRedundancyEnabled"></a>

```csharp
private void ResetZoneRedundancyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList">ContainerRegistryEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplications">Georeplications</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList">ContainerRegistryGeoreplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference">ContainerRegistryIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.loginServer">LoginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSet">NetworkRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList">ContainerRegistryNetworkRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList">ContainerRegistryRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicy">TrustPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList">ContainerRegistryTrustPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabledInput">AnonymousPullEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabledInput">DataEndpointEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryptionInput">EncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabledInput">ExportPolicyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplicationsInput">GeoreplicationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOptionInput">NetworkRuleBypassOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSetInput">NetworkRuleSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabledInput">QuarantinePolicyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicyInput">TrustPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabledInput">ZoneRedundancyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabled">AnonymousPullEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabled">DataEndpointEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabled">ExportPolicyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOption">NetworkRuleBypassOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabled">QuarantinePolicyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryption"></a>

```csharp
public ContainerRegistryEncryptionList Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList">ContainerRegistryEncryptionList</a>

---

##### `Georeplications`<sup>Required</sup> <a name="Georeplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplications"></a>

```csharp
public ContainerRegistryGeoreplicationsList Georeplications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList">ContainerRegistryGeoreplicationsList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identity"></a>

```csharp
public ContainerRegistryIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference">ContainerRegistryIdentityOutputReference</a>

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.loginServer"></a>

```csharp
public string LoginServer { get; }
```

- *Type:* string

---

##### `NetworkRuleSet`<sup>Required</sup> <a name="NetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSet"></a>

```csharp
public ContainerRegistryNetworkRuleSetList NetworkRuleSet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList">ContainerRegistryNetworkRuleSetList</a>

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicy"></a>

```csharp
public ContainerRegistryRetentionPolicyList RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList">ContainerRegistryRetentionPolicyList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeouts"></a>

```csharp
public ContainerRegistryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a>

---

##### `TrustPolicy`<sup>Required</sup> <a name="TrustPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicy"></a>

```csharp
public ContainerRegistryTrustPolicyList TrustPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList">ContainerRegistryTrustPolicyList</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabledInput"></a>

```csharp
public object AdminEnabledInput { get; }
```

- *Type:* object

---

##### `AnonymousPullEnabledInput`<sup>Optional</sup> <a name="AnonymousPullEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabledInput"></a>

```csharp
public object AnonymousPullEnabledInput { get; }
```

- *Type:* object

---

##### `DataEndpointEnabledInput`<sup>Optional</sup> <a name="DataEndpointEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabledInput"></a>

```csharp
public object DataEndpointEnabledInput { get; }
```

- *Type:* object

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryptionInput"></a>

```csharp
public object EncryptionInput { get; }
```

- *Type:* object

---

##### `ExportPolicyEnabledInput`<sup>Optional</sup> <a name="ExportPolicyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabledInput"></a>

```csharp
public object ExportPolicyEnabledInput { get; }
```

- *Type:* object

---

##### `GeoreplicationsInput`<sup>Optional</sup> <a name="GeoreplicationsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplicationsInput"></a>

```csharp
public object GeoreplicationsInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identityInput"></a>

```csharp
public ContainerRegistryIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkRuleBypassOptionInput`<sup>Optional</sup> <a name="NetworkRuleBypassOptionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOptionInput"></a>

```csharp
public string NetworkRuleBypassOptionInput { get; }
```

- *Type:* string

---

##### `NetworkRuleSetInput`<sup>Optional</sup> <a name="NetworkRuleSetInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSetInput"></a>

```csharp
public object NetworkRuleSetInput { get; }
```

- *Type:* object

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `QuarantinePolicyEnabledInput`<sup>Optional</sup> <a name="QuarantinePolicyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabledInput"></a>

```csharp
public object QuarantinePolicyEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInput"></a>

```csharp
public object RetentionPolicyInput { get; }
```

- *Type:* object

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrustPolicyInput`<sup>Optional</sup> <a name="TrustPolicyInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicyInput"></a>

```csharp
public object TrustPolicyInput { get; }
```

- *Type:* object

---

##### `ZoneRedundancyEnabledInput`<sup>Optional</sup> <a name="ZoneRedundancyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabledInput"></a>

```csharp
public object ZoneRedundancyEnabledInput { get; }
```

- *Type:* object

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; }
```

- *Type:* object

---

##### `AnonymousPullEnabled`<sup>Required</sup> <a name="AnonymousPullEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabled"></a>

```csharp
public object AnonymousPullEnabled { get; }
```

- *Type:* object

---

##### `DataEndpointEnabled`<sup>Required</sup> <a name="DataEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabled"></a>

```csharp
public object DataEndpointEnabled { get; }
```

- *Type:* object

---

##### `ExportPolicyEnabled`<sup>Required</sup> <a name="ExportPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabled"></a>

```csharp
public object ExportPolicyEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkRuleBypassOption`<sup>Required</sup> <a name="NetworkRuleBypassOption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOption"></a>

```csharp
public string NetworkRuleBypassOption { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `QuarantinePolicyEnabled`<sup>Required</sup> <a name="QuarantinePolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabled"></a>

```csharp
public object QuarantinePolicyEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZoneRedundancyEnabled`<sup>Required</sup> <a name="ZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabled"></a>

```csharp
public object ZoneRedundancyEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryConfig <a name="ContainerRegistryConfig" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string Sku,
    object AdminEnabled = null,
    object AnonymousPullEnabled = null,
    object DataEndpointEnabled = null,
    object Encryption = null,
    object ExportPolicyEnabled = null,
    object Georeplications = null,
    string Id = null,
    ContainerRegistryIdentity Identity = null,
    string NetworkRuleBypassOption = null,
    object NetworkRuleSet = null,
    object PublicNetworkAccessEnabled = null,
    object QuarantinePolicyEnabled = null,
    object RetentionPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ContainerRegistryTimeouts Timeouts = null,
    object TrustPolicy = null,
    object ZoneRedundancyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#name ContainerRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#sku ContainerRegistry#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.adminEnabled">AdminEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.anonymousPullEnabled">AnonymousPullEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dataEndpointEnabled">DataEndpointEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.encryption">Encryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.exportPolicyEnabled">ExportPolicyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.georeplications">Georeplications</a></code> | <code>object</code> | georeplications block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#id ContainerRegistry#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassOption">NetworkRuleBypassOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleSet">NetworkRuleSet</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.quarantinePolicyEnabled">QuarantinePolicyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#retention_policy ContainerRegistry#retention_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#tags ContainerRegistry#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.trustPolicy">TrustPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#trust_policy ContainerRegistry#trust_policy}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#name ContainerRegistry#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#sku ContainerRegistry#sku}.

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.adminEnabled"></a>

```csharp
public object AdminEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}.

---

##### `AnonymousPullEnabled`<sup>Optional</sup> <a name="AnonymousPullEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.anonymousPullEnabled"></a>

```csharp
public object AnonymousPullEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}.

---

##### `DataEndpointEnabled`<sup>Optional</sup> <a name="DataEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dataEndpointEnabled"></a>

```csharp
public object DataEndpointEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.encryption"></a>

```csharp
public object Encryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}.

---

##### `ExportPolicyEnabled`<sup>Optional</sup> <a name="ExportPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.exportPolicyEnabled"></a>

```csharp
public object ExportPolicyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}.

---

##### `Georeplications`<sup>Optional</sup> <a name="Georeplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.georeplications"></a>

```csharp
public object Georeplications { get; set; }
```

- *Type:* object

georeplications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#georeplications ContainerRegistry#georeplications}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#id ContainerRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.identity"></a>

```csharp
public ContainerRegistryIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#identity ContainerRegistry#identity}

---

##### `NetworkRuleBypassOption`<sup>Optional</sup> <a name="NetworkRuleBypassOption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassOption"></a>

```csharp
public string NetworkRuleBypassOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}.

---

##### `NetworkRuleSet`<sup>Optional</sup> <a name="NetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleSet"></a>

```csharp
public object NetworkRuleSet { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}.

---

##### `QuarantinePolicyEnabled`<sup>Optional</sup> <a name="QuarantinePolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.quarantinePolicyEnabled"></a>

```csharp
public object QuarantinePolicyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.retentionPolicy"></a>

```csharp
public object RetentionPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#retention_policy ContainerRegistry#retention_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#tags ContainerRegistry#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.timeouts"></a>

```csharp
public ContainerRegistryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#timeouts ContainerRegistry#timeouts}

---

##### `TrustPolicy`<sup>Optional</sup> <a name="TrustPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.trustPolicy"></a>

```csharp
public object TrustPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#trust_policy ContainerRegistry#trust_policy}.

---

##### `ZoneRedundancyEnabled`<sup>Optional</sup> <a name="ZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.zoneRedundancyEnabled"></a>

```csharp
public object ZoneRedundancyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}.

---

### ContainerRegistryEncryption <a name="ContainerRegistryEncryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryEncryption {
    object Enabled = null,
    string IdentityClientId = null,
    string KeyVaultKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#identity_client_id ContainerRegistry#identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#key_vault_key_id ContainerRegistry#key_vault_key_id}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}.

---

##### `IdentityClientId`<sup>Optional</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#identity_client_id ContainerRegistry#identity_client_id}.

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#key_vault_key_id ContainerRegistry#key_vault_key_id}.

---

### ContainerRegistryGeoreplications <a name="ContainerRegistryGeoreplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryGeoreplications {
    string Location,
    object RegionalEndpointEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    object ZoneRedundancyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.regionalEndpointEnabled">RegionalEndpointEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#regional_endpoint_enabled ContainerRegistry#regional_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#tags ContainerRegistry#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `RegionalEndpointEnabled`<sup>Optional</sup> <a name="RegionalEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.regionalEndpointEnabled"></a>

```csharp
public object RegionalEndpointEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#regional_endpoint_enabled ContainerRegistry#regional_endpoint_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#tags ContainerRegistry#tags}.

---

##### `ZoneRedundancyEnabled`<sup>Optional</sup> <a name="ZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.zoneRedundancyEnabled"></a>

```csharp
public object ZoneRedundancyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}.

---

### ContainerRegistryIdentity <a name="ContainerRegistryIdentity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#type ContainerRegistry#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#identity_ids ContainerRegistry#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#type ContainerRegistry#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#identity_ids ContainerRegistry#identity_ids}.

---

### ContainerRegistryNetworkRuleSet <a name="ContainerRegistryNetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSet {
    string DefaultAction = null,
    object IpRule = null,
    object VirtualNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#default_action ContainerRegistry#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.ipRule">IpRule</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#ip_rule ContainerRegistry#ip_rule}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.virtualNetwork">VirtualNetwork</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#virtual_network ContainerRegistry#virtual_network}. |

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#default_action ContainerRegistry#default_action}.

---

##### `IpRule`<sup>Optional</sup> <a name="IpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.ipRule"></a>

```csharp
public object IpRule { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#ip_rule ContainerRegistry#ip_rule}.

---

##### `VirtualNetwork`<sup>Optional</sup> <a name="VirtualNetwork" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.virtualNetwork"></a>

```csharp
public object VirtualNetwork { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#virtual_network ContainerRegistry#virtual_network}.

---

### ContainerRegistryNetworkRuleSetIpRule <a name="ContainerRegistryNetworkRuleSetIpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetIpRule {
    string Action = null,
    string IpRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#action ContainerRegistry#action}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.ipRange">IpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#ip_range ContainerRegistry#ip_range}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#action ContainerRegistry#action}.

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.ipRange"></a>

```csharp
public string IpRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#ip_range ContainerRegistry#ip_range}.

---

### ContainerRegistryNetworkRuleSetVirtualNetwork <a name="ContainerRegistryNetworkRuleSetVirtualNetwork" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetVirtualNetwork {
    string Action = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetwork.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#action ContainerRegistry#action}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetwork.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#subnet_id ContainerRegistry#subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetwork.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#action ContainerRegistry#action}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetwork.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#subnet_id ContainerRegistry#subnet_id}.

---

### ContainerRegistryRetentionPolicy <a name="ContainerRegistryRetentionPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryRetentionPolicy {
    double Days = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicy.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#days ContainerRegistry#days}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicy.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#days ContainerRegistry#days}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}.

---

### ContainerRegistryTimeouts <a name="ContainerRegistryTimeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#create ContainerRegistry#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#delete ContainerRegistry#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#read ContainerRegistry#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#update ContainerRegistry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#create ContainerRegistry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#delete ContainerRegistry#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#read ContainerRegistry#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#update ContainerRegistry#update}.

---

### ContainerRegistryTrustPolicy <a name="ContainerRegistryTrustPolicy" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTrustPolicy {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicy.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/container_registry#enabled ContainerRegistry#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryEncryptionList <a name="ContainerRegistryEncryptionList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get"></a>

```csharp
private ContainerRegistryEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryEncryptionOutputReference <a name="ContainerRegistryEncryptionOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetIdentityClientId">ResetIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIdentityClientId` <a name="ResetIdentityClientId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetIdentityClientId"></a>

```csharp
private void ResetIdentityClientId()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetKeyVaultKeyId"></a>

```csharp
private void ResetKeyVaultKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientIdInput">IdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdentityClientIdInput`<sup>Optional</sup> <a name="IdentityClientIdInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientIdInput"></a>

```csharp
public string IdentityClientIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryGeoreplicationsList <a name="ContainerRegistryGeoreplicationsList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryGeoreplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get"></a>

```csharp
private ContainerRegistryGeoreplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryGeoreplicationsOutputReference <a name="ContainerRegistryGeoreplicationsOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryGeoreplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetRegionalEndpointEnabled">ResetRegionalEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetZoneRedundancyEnabled">ResetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionalEndpointEnabled` <a name="ResetRegionalEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetRegionalEndpointEnabled"></a>

```csharp
private void ResetRegionalEndpointEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetZoneRedundancyEnabled` <a name="ResetZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetZoneRedundancyEnabled"></a>

```csharp
private void ResetZoneRedundancyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabledInput">RegionalEndpointEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabledInput">ZoneRedundancyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabled">RegionalEndpointEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabled">ZoneRedundancyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `RegionalEndpointEnabledInput`<sup>Optional</sup> <a name="RegionalEndpointEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabledInput"></a>

```csharp
public object RegionalEndpointEnabledInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZoneRedundancyEnabledInput`<sup>Optional</sup> <a name="ZoneRedundancyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabledInput"></a>

```csharp
public object ZoneRedundancyEnabledInput { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `RegionalEndpointEnabled`<sup>Required</sup> <a name="RegionalEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabled"></a>

```csharp
public object RegionalEndpointEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZoneRedundancyEnabled`<sup>Required</sup> <a name="ZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabled"></a>

```csharp
public object ZoneRedundancyEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryIdentityOutputReference <a name="ContainerRegistryIdentityOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.internalValue"></a>

```csharp
public ContainerRegistryIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---


### ContainerRegistryNetworkRuleSetIpRuleList <a name="ContainerRegistryNetworkRuleSetIpRuleList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get"></a>

```csharp
private ContainerRegistryNetworkRuleSetIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryNetworkRuleSetIpRuleOutputReference <a name="ContainerRegistryNetworkRuleSetIpRuleOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetIpRange">ResetIpRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetIpRange"></a>

```csharp
private void ResetIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRangeInput"></a>

```csharp
public string IpRangeInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryNetworkRuleSetList <a name="ContainerRegistryNetworkRuleSetList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get"></a>

```csharp
private ContainerRegistryNetworkRuleSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryNetworkRuleSetOutputReference <a name="ContainerRegistryNetworkRuleSetOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule">PutIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putVirtualNetwork">PutVirtualNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetIpRule">ResetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetVirtualNetwork">ResetVirtualNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpRule` <a name="PutIpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule"></a>

```csharp
private void PutIpRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule.parameter.value"></a>

- *Type:* object

---

##### `PutVirtualNetwork` <a name="PutVirtualNetwork" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putVirtualNetwork"></a>

```csharp
private void PutVirtualNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putVirtualNetwork.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetIpRule` <a name="ResetIpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetIpRule"></a>

```csharp
private void ResetIpRule()
```

##### `ResetVirtualNetwork` <a name="ResetVirtualNetwork" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetVirtualNetwork"></a>

```csharp
private void ResetVirtualNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRule">IpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList">ContainerRegistryNetworkRuleSetIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.virtualNetwork">VirtualNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList">ContainerRegistryNetworkRuleSetVirtualNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRuleInput">IpRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.virtualNetworkInput">VirtualNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRule"></a>

```csharp
public ContainerRegistryNetworkRuleSetIpRuleList IpRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList">ContainerRegistryNetworkRuleSetIpRuleList</a>

---

##### `VirtualNetwork`<sup>Required</sup> <a name="VirtualNetwork" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.virtualNetwork"></a>

```csharp
public ContainerRegistryNetworkRuleSetVirtualNetworkList VirtualNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList">ContainerRegistryNetworkRuleSetVirtualNetworkList</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpRuleInput`<sup>Optional</sup> <a name="IpRuleInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRuleInput"></a>

```csharp
public object IpRuleInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkInput`<sup>Optional</sup> <a name="VirtualNetworkInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.virtualNetworkInput"></a>

```csharp
public object VirtualNetworkInput { get; }
```

- *Type:* object

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryNetworkRuleSetVirtualNetworkList <a name="ContainerRegistryNetworkRuleSetVirtualNetworkList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetVirtualNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.get"></a>

```csharp
private ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference <a name="ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetVirtualNetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryRetentionPolicyList <a name="ContainerRegistryRetentionPolicyList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryRetentionPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.get"></a>

```csharp
private ContainerRegistryRetentionPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryRetentionPolicyOutputReference <a name="ContainerRegistryRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryTimeoutsOutputReference <a name="ContainerRegistryTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryTrustPolicyList <a name="ContainerRegistryTrustPolicyList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTrustPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.get"></a>

```csharp
private ContainerRegistryTrustPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerRegistryTrustPolicyOutputReference <a name="ContainerRegistryTrustPolicyOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTrustPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTrustPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



