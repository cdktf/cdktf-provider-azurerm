# `azurerm_web_pubsub_network_acl`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_network_acl`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl).

# `webPubsubNetworkAcl` Submodule <a name="`webPubsubNetworkAcl` Submodule" id="@cdktf/provider-azurerm.webPubsubNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubNetworkAcl <a name="WebPubsubNetworkAcl" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl azurerm_web_pubsub_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAcl(Construct Scope, string Id, WebPubsubNetworkAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig">WebPubsubNetworkAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig">WebPubsubNetworkAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint">PutPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork">PutPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetPrivateEndpoint">ResetPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPrivateEndpoint` <a name="PutPrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint"></a>

```csharp
private void PutPrivateEndpoint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint.parameter.value"></a>

- *Type:* object

---

##### `PutPublicNetwork` <a name="PutPublicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork"></a>

```csharp
private void PutPublicNetwork(WebPubsubNetworkAclPublicNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts"></a>

```csharp
private void PutTimeouts(WebPubsubNetworkAclTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateEndpoint` <a name="ResetPrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetPrivateEndpoint"></a>

```csharp
private void ResetPrivateEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebPubsubNetworkAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebPubsubNetworkAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebPubsubNetworkAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpoint">PrivateEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList">WebPubsubNetworkAclPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetwork">PublicNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference">WebPubsubNetworkAclPublicNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference">WebPubsubNetworkAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpointInput">PrivateEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetworkInput">PublicNetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubIdInput">WebPubsubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubId">WebPubsubId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpoint"></a>

```csharp
public WebPubsubNetworkAclPrivateEndpointList PrivateEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList">WebPubsubNetworkAclPrivateEndpointList</a>

---

##### `PublicNetwork`<sup>Required</sup> <a name="PublicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetwork"></a>

```csharp
public WebPubsubNetworkAclPublicNetworkOutputReference PublicNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference">WebPubsubNetworkAclPublicNetworkOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeouts"></a>

```csharp
public WebPubsubNetworkAclTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference">WebPubsubNetworkAclTimeoutsOutputReference</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointInput`<sup>Optional</sup> <a name="PrivateEndpointInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpointInput"></a>

```csharp
public object PrivateEndpointInput { get; }
```

- *Type:* object

---

##### `PublicNetworkInput`<sup>Optional</sup> <a name="PublicNetworkInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetworkInput"></a>

```csharp
public WebPubsubNetworkAclPublicNetwork PublicNetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebPubsubIdInput`<sup>Optional</sup> <a name="WebPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubIdInput"></a>

```csharp
public string WebPubsubIdInput { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubId"></a>

```csharp
public string WebPubsubId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubNetworkAclConfig <a name="WebPubsubNetworkAclConfig" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    WebPubsubNetworkAclPublicNetwork PublicNetwork,
    string WebPubsubId,
    string DefaultAction = null,
    string Id = null,
    object PrivateEndpoint = null,
    WebPubsubNetworkAclTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.publicNetwork">PublicNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | public_network block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.webPubsubId">WebPubsubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.privateEndpoint">PrivateEndpoint</a></code> | <code>object</code> | private_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PublicNetwork`<sup>Required</sup> <a name="PublicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.publicNetwork"></a>

```csharp
public WebPubsubNetworkAclPublicNetwork PublicNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

public_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#public_network WebPubsubNetworkAcl#public_network}

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.webPubsubId"></a>

```csharp
public string WebPubsubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}.

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateEndpoint`<sup>Optional</sup> <a name="PrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.privateEndpoint"></a>

```csharp
public object PrivateEndpoint { get; set; }
```

- *Type:* object

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#private_endpoint WebPubsubNetworkAcl#private_endpoint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.timeouts"></a>

```csharp
public WebPubsubNetworkAclTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#timeouts WebPubsubNetworkAcl#timeouts}

---

### WebPubsubNetworkAclPrivateEndpoint <a name="WebPubsubNetworkAclPrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclPrivateEndpoint {
    string Id,
    string[] AllowedRequestTypes = null,
    string[] DeniedRequestTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AllowedRequestTypes`<sup>Optional</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.allowedRequestTypes"></a>

```csharp
public string[] AllowedRequestTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}.

---

##### `DeniedRequestTypes`<sup>Optional</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.deniedRequestTypes"></a>

```csharp
public string[] DeniedRequestTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}.

---

### WebPubsubNetworkAclPublicNetwork <a name="WebPubsubNetworkAclPublicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclPublicNetwork {
    string[] AllowedRequestTypes = null,
    string[] DeniedRequestTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}. |

---

##### `AllowedRequestTypes`<sup>Optional</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.allowedRequestTypes"></a>

```csharp
public string[] AllowedRequestTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}.

---

##### `DeniedRequestTypes`<sup>Optional</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.deniedRequestTypes"></a>

```csharp
public string[] DeniedRequestTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}.

---

### WebPubsubNetworkAclTimeouts <a name="WebPubsubNetworkAclTimeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubNetworkAclPrivateEndpointList <a name="WebPubsubNetworkAclPrivateEndpointList" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclPrivateEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get"></a>

```csharp
private WebPubsubNetworkAclPrivateEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebPubsubNetworkAclPrivateEndpointOutputReference <a name="WebPubsubNetworkAclPrivateEndpointOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclPrivateEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes">ResetAllowedRequestTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes">ResetDeniedRequestTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRequestTypes` <a name="ResetAllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes"></a>

```csharp
private void ResetAllowedRequestTypes()
```

##### `ResetDeniedRequestTypes` <a name="ResetDeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes"></a>

```csharp
private void ResetDeniedRequestTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput">AllowedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput">DeniedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRequestTypesInput`<sup>Optional</sup> <a name="AllowedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput"></a>

```csharp
public string[] AllowedRequestTypesInput { get; }
```

- *Type:* string[]

---

##### `DeniedRequestTypesInput`<sup>Optional</sup> <a name="DeniedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput"></a>

```csharp
public string[] DeniedRequestTypesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AllowedRequestTypes`<sup>Required</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes"></a>

```csharp
public string[] AllowedRequestTypes { get; }
```

- *Type:* string[]

---

##### `DeniedRequestTypes`<sup>Required</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes"></a>

```csharp
public string[] DeniedRequestTypes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebPubsubNetworkAclPublicNetworkOutputReference <a name="WebPubsubNetworkAclPublicNetworkOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclPublicNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes">ResetAllowedRequestTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes">ResetDeniedRequestTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRequestTypes` <a name="ResetAllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes"></a>

```csharp
private void ResetAllowedRequestTypes()
```

##### `ResetDeniedRequestTypes` <a name="ResetDeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes"></a>

```csharp
private void ResetDeniedRequestTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput">AllowedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput">DeniedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes">AllowedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes">DeniedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRequestTypesInput`<sup>Optional</sup> <a name="AllowedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput"></a>

```csharp
public string[] AllowedRequestTypesInput { get; }
```

- *Type:* string[]

---

##### `DeniedRequestTypesInput`<sup>Optional</sup> <a name="DeniedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput"></a>

```csharp
public string[] DeniedRequestTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedRequestTypes`<sup>Required</sup> <a name="AllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes"></a>

```csharp
public string[] AllowedRequestTypes { get; }
```

- *Type:* string[]

---

##### `DeniedRequestTypes`<sup>Required</sup> <a name="DeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes"></a>

```csharp
public string[] DeniedRequestTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.internalValue"></a>

```csharp
public WebPubsubNetworkAclPublicNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---


### WebPubsubNetworkAclTimeoutsOutputReference <a name="WebPubsubNetworkAclTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubNetworkAclTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



