# `frontdoorFirewallPolicy` Submodule <a name="`frontdoorFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorFirewallPolicy <a name="FrontdoorFirewallPolicy" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy azurerm_frontdoor_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicy;

FrontdoorFirewallPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .customBlockResponseBody(java.lang.String)
//  .customBlockResponseStatusCode(java.lang.Number)
//  .customRule(IResolvable)
//  .customRule(java.util.List<FrontdoorFirewallPolicyCustomRule>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .managedRule(IResolvable)
//  .managedRule(java.util.List<FrontdoorFirewallPolicyManagedRule>)
//  .mode(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FrontdoorFirewallPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseBody">customBlockResponseBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseStatusCode">customBlockResponseStatusCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customRule">customRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>></code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.managedRule">managedRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>></code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}.

---

##### `customBlockResponseBody`<sup>Optional</sup> <a name="customBlockResponseBody" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `customBlockResponseStatusCode`<sup>Optional</sup> <a name="customBlockResponseStatusCode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customBlockResponseStatusCode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `customRule`<sup>Optional</sup> <a name="customRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.customRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>>

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_rule FrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedRule`<sup>Optional</sup> <a name="managedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.managedRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>>

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#managed_rule FrontdoorFirewallPolicy#managed_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.redirectUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#timeouts FrontdoorFirewallPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule">putCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule">putManagedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseBody">resetCustomBlockResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode">resetCustomBlockResponseStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomRule">resetCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetManagedRule">resetManagedRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomRule` <a name="putCustomRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule"></a>

```java
public void putCustomRule(IResolvable OR java.util.List<FrontdoorFirewallPolicyCustomRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putCustomRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>>

---

##### `putManagedRule` <a name="putManagedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule"></a>

```java
public void putManagedRule(IResolvable OR java.util.List<FrontdoorFirewallPolicyManagedRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putManagedRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts"></a>

```java
public void putTimeouts(FrontdoorFirewallPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

---

##### `resetCustomBlockResponseBody` <a name="resetCustomBlockResponseBody" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseBody"></a>

```java
public void resetCustomBlockResponseBody()
```

##### `resetCustomBlockResponseStatusCode` <a name="resetCustomBlockResponseStatusCode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomBlockResponseStatusCode"></a>

```java
public void resetCustomBlockResponseStatusCode()
```

##### `resetCustomRule` <a name="resetCustomRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetCustomRule"></a>

```java
public void resetCustomRule()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetManagedRule` <a name="resetManagedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetManagedRule"></a>

```java
public void resetManagedRule()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetMode"></a>

```java
public void resetMode()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FrontdoorFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicy;

FrontdoorFirewallPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicy;

FrontdoorFirewallPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicy;

FrontdoorFirewallPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicy;

FrontdoorFirewallPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FrontdoorFirewallPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FrontdoorFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FrontdoorFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FrontdoorFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FrontdoorFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRule">customRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList">FrontdoorFirewallPolicyCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.frontendEndpointIds">frontendEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRule">managedRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList">FrontdoorFirewallPolicyManagedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference">FrontdoorFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBodyInput">customBlockResponseBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput">customBlockResponseStatusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRuleInput">customRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRuleInput">managedRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBody">customBlockResponseBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCode">customBlockResponseStatusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customRule`<sup>Required</sup> <a name="customRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRule"></a>

```java
public FrontdoorFirewallPolicyCustomRuleList getCustomRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList">FrontdoorFirewallPolicyCustomRuleList</a>

---

##### `frontendEndpointIds`<sup>Required</sup> <a name="frontendEndpointIds" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.frontendEndpointIds"></a>

```java
public java.util.List<java.lang.String> getFrontendEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedRule`<sup>Required</sup> <a name="managedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRule"></a>

```java
public FrontdoorFirewallPolicyManagedRuleList getManagedRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList">FrontdoorFirewallPolicyManagedRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeouts"></a>

```java
public FrontdoorFirewallPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference">FrontdoorFirewallPolicyTimeoutsOutputReference</a>

---

##### `customBlockResponseBodyInput`<sup>Optional</sup> <a name="customBlockResponseBodyInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBodyInput"></a>

```java
public java.lang.String getCustomBlockResponseBodyInput();
```

- *Type:* java.lang.String

---

##### `customBlockResponseStatusCodeInput`<sup>Optional</sup> <a name="customBlockResponseStatusCodeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCodeInput"></a>

```java
public java.lang.Number getCustomBlockResponseStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `customRuleInput`<sup>Optional</sup> <a name="customRuleInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customRuleInput"></a>

```java
public java.lang.Object getCustomRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedRuleInput`<sup>Optional</sup> <a name="managedRuleInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.managedRuleInput"></a>

```java
public java.lang.Object getManagedRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

---

##### `customBlockResponseBody`<sup>Required</sup> <a name="customBlockResponseBody" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseBody"></a>

```java
public java.lang.String getCustomBlockResponseBody();
```

- *Type:* java.lang.String

---

##### `customBlockResponseStatusCode`<sup>Required</sup> <a name="customBlockResponseStatusCode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.customBlockResponseStatusCode"></a>

```java
public java.lang.Number getCustomBlockResponseStatusCode();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorFirewallPolicyConfig <a name="FrontdoorFirewallPolicyConfig" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyConfig;

FrontdoorFirewallPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .customBlockResponseBody(java.lang.String)
//  .customBlockResponseStatusCode(java.lang.Number)
//  .customRule(IResolvable)
//  .customRule(java.util.List<FrontdoorFirewallPolicyCustomRule>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .managedRule(IResolvable)
//  .managedRule(java.util.List<FrontdoorFirewallPolicyManagedRule>)
//  .mode(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FrontdoorFirewallPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseBody">customBlockResponseBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode">customBlockResponseStatusCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customRule">customRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>></code> | custom_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.managedRule">managedRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>></code> | managed_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#resource_group_name FrontdoorFirewallPolicy#resource_group_name}.

---

##### `customBlockResponseBody`<sup>Optional</sup> <a name="customBlockResponseBody" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseBody"></a>

```java
public java.lang.String getCustomBlockResponseBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_body FrontdoorFirewallPolicy#custom_block_response_body}.

---

##### `customBlockResponseStatusCode`<sup>Optional</sup> <a name="customBlockResponseStatusCode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customBlockResponseStatusCode"></a>

```java
public java.lang.Number getCustomBlockResponseStatusCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_block_response_status_code FrontdoorFirewallPolicy#custom_block_response_status_code}.

---

##### `customRule`<sup>Optional</sup> <a name="customRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.customRule"></a>

```java
public java.lang.Object getCustomRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>>

custom_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#custom_rule FrontdoorFirewallPolicy#custom_rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#id FrontdoorFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedRule`<sup>Optional</sup> <a name="managedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.managedRule"></a>

```java
public java.lang.Object getManagedRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>>

managed_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#managed_rule FrontdoorFirewallPolicy#managed_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#mode FrontdoorFirewallPolicy#mode}.

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#redirect_url FrontdoorFirewallPolicy#redirect_url}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#tags FrontdoorFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyConfig.property.timeouts"></a>

```java
public FrontdoorFirewallPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#timeouts FrontdoorFirewallPolicy#timeouts}

---

### FrontdoorFirewallPolicyCustomRule <a name="FrontdoorFirewallPolicyCustomRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyCustomRule;

FrontdoorFirewallPolicyCustomRule.builder()
    .action(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .matchCondition(IResolvable)
//  .matchCondition(java.util.List<FrontdoorFirewallPolicyCustomRuleMatchCondition>)
//  .priority(java.lang.Number)
//  .rateLimitDurationInMinutes(java.lang.Number)
//  .rateLimitThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.matchCondition">matchCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>></code> | match_condition block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#priority FrontdoorFirewallPolicy#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes">rateLimitDurationInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#name FrontdoorFirewallPolicy#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `matchCondition`<sup>Optional</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.matchCondition"></a>

```java
public java.lang.Object getMatchCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_condition FrontdoorFirewallPolicy#match_condition}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#priority FrontdoorFirewallPolicy#priority}.

---

##### `rateLimitDurationInMinutes`<sup>Optional</sup> <a name="rateLimitDurationInMinutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitDurationInMinutes"></a>

```java
public java.lang.Number getRateLimitDurationInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rate_limit_duration_in_minutes FrontdoorFirewallPolicy#rate_limit_duration_in_minutes}.

---

##### `rateLimitThreshold`<sup>Optional</sup> <a name="rateLimitThreshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule.property.rateLimitThreshold"></a>

```java
public java.lang.Number getRateLimitThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rate_limit_threshold FrontdoorFirewallPolicy#rate_limit_threshold}.

---

### FrontdoorFirewallPolicyCustomRuleMatchCondition <a name="FrontdoorFirewallPolicyCustomRuleMatchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyCustomRuleMatchCondition;

FrontdoorFirewallPolicyCustomRuleMatchCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
    .matchVariable(java.lang.String)
    .operator(java.lang.String)
//  .negationCondition(java.lang.Boolean)
//  .negationCondition(IResolvable)
//  .selector(java.lang.String)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_values FrontdoorFirewallPolicy#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition">negationCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#negation_condition FrontdoorFirewallPolicy#negation_condition}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector">selector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#transforms FrontdoorFirewallPolicy#transforms}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_values FrontdoorFirewallPolicy#match_values}.

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `negationCondition`<sup>Optional</sup> <a name="negationCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.negationCondition"></a>

```java
public java.lang.Object getNegationCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#negation_condition FrontdoorFirewallPolicy#negation_condition}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#transforms FrontdoorFirewallPolicy#transforms}.

---

### FrontdoorFirewallPolicyManagedRule <a name="FrontdoorFirewallPolicyManagedRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRule;

FrontdoorFirewallPolicyManagedRule.builder()
    .type(java.lang.String)
    .version(java.lang.String)
//  .exclusion(IResolvable)
//  .exclusion(java.util.List<FrontdoorFirewallPolicyManagedRuleExclusion>)
//  .override(IResolvable)
//  .override(java.util.List<FrontdoorFirewallPolicyManagedRuleOverride>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#version FrontdoorFirewallPolicy#version}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.exclusion">exclusion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>></code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.override">override</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>></code> | override block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#type FrontdoorFirewallPolicy#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#version FrontdoorFirewallPolicy#version}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.exclusion"></a>

```java
public java.lang.Object getExclusion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>>

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

##### `override`<sup>Optional</sup> <a name="override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule.property.override"></a>

```java
public java.lang.Object getOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>>

override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#override FrontdoorFirewallPolicy#override}

---

### FrontdoorFirewallPolicyManagedRuleExclusion <a name="FrontdoorFirewallPolicyManagedRuleExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleExclusion;

FrontdoorFirewallPolicyManagedRuleExclusion.builder()
    .matchVariable(java.lang.String)
    .operator(java.lang.String)
    .selector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.selector">selector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyManagedRuleOverride <a name="FrontdoorFirewallPolicyManagedRuleOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverride;

FrontdoorFirewallPolicyManagedRuleOverride.builder()
    .ruleGroupName(java.lang.String)
//  .exclusion(IResolvable)
//  .exclusion(java.util.List<FrontdoorFirewallPolicyManagedRuleOverrideExclusion>)
//  .rule(IResolvable)
//  .rule(java.util.List<FrontdoorFirewallPolicyManagedRuleOverrideRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName">ruleGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rule_group_name FrontdoorFirewallPolicy#rule_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.exclusion">exclusion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>></code> | exclusion block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>></code> | rule block. |

---

##### `ruleGroupName`<sup>Required</sup> <a name="ruleGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.ruleGroupName"></a>

```java
public java.lang.String getRuleGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rule_group_name FrontdoorFirewallPolicy#rule_group_name}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.exclusion"></a>

```java
public java.lang.Object getExclusion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>>

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rule FrontdoorFirewallPolicy#rule}

---

### FrontdoorFirewallPolicyManagedRuleOverrideExclusion <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion;

FrontdoorFirewallPolicyManagedRuleOverrideExclusion.builder()
    .matchVariable(java.lang.String)
    .operator(java.lang.String)
    .selector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector">selector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyManagedRuleOverrideRule <a name="FrontdoorFirewallPolicyManagedRuleOverrideRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideRule;

FrontdoorFirewallPolicyManagedRuleOverrideRule.builder()
    .action(java.lang.String)
    .ruleId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .exclusion(IResolvable)
//  .exclusion(java.util.List<FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rule_id FrontdoorFirewallPolicy#rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion">exclusion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>></code> | exclusion block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#action FrontdoorFirewallPolicy#action}.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#rule_id FrontdoorFirewallPolicy#rule_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#enabled FrontdoorFirewallPolicy#enabled}.

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule.property.exclusion"></a>

```java
public java.lang.Object getExclusion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>>

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#exclusion FrontdoorFirewallPolicy#exclusion}

---

### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion;

FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.builder()
    .matchVariable(java.lang.String)
    .operator(java.lang.String)
    .selector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector">selector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}. |

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#match_variable FrontdoorFirewallPolicy#match_variable}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#operator FrontdoorFirewallPolicy#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#selector FrontdoorFirewallPolicy#selector}.

---

### FrontdoorFirewallPolicyTimeouts <a name="FrontdoorFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyTimeouts;

FrontdoorFirewallPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#create FrontdoorFirewallPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#delete FrontdoorFirewallPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#read FrontdoorFirewallPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/frontdoor_firewall_policy#update FrontdoorFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorFirewallPolicyCustomRuleList <a name="FrontdoorFirewallPolicyCustomRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyCustomRuleList;

new FrontdoorFirewallPolicyCustomRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get"></a>

```java
public FrontdoorFirewallPolicyCustomRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>>

---


### FrontdoorFirewallPolicyCustomRuleMatchConditionList <a name="FrontdoorFirewallPolicyCustomRuleMatchConditionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyCustomRuleMatchConditionList;

new FrontdoorFirewallPolicyCustomRuleMatchConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get"></a>

```java
public FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>>

---


### FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference <a name="FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference;

new FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition">resetNegationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegationCondition` <a name="resetNegationCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetNegationCondition"></a>

```java
public void resetNegationCondition()
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput">negationConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition">negationCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariableInput"></a>

```java
public java.lang.String getMatchVariableInput();
```

- *Type:* java.lang.String

---

##### `negationConditionInput`<sup>Optional</sup> <a name="negationConditionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationConditionInput"></a>

```java
public java.lang.Object getNegationConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

---

##### `negationCondition`<sup>Required</sup> <a name="negationCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.negationCondition"></a>

```java
public java.lang.Object getNegationCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>

---


### FrontdoorFirewallPolicyCustomRuleOutputReference <a name="FrontdoorFirewallPolicyCustomRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyCustomRuleOutputReference;

new FrontdoorFirewallPolicyCustomRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition">resetMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes">resetRateLimitDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold">resetRateLimitThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition"></a>

```java
public void putMatchCondition(IResolvable OR java.util.List<FrontdoorFirewallPolicyCustomRuleMatchCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMatchCondition` <a name="resetMatchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetMatchCondition"></a>

```java
public void resetMatchCondition()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRateLimitDurationInMinutes` <a name="resetRateLimitDurationInMinutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitDurationInMinutes"></a>

```java
public void resetRateLimitDurationInMinutes()
```

##### `resetRateLimitThreshold` <a name="resetRateLimitThreshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.resetRateLimitThreshold"></a>

```java
public void resetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList">FrontdoorFirewallPolicyCustomRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput">rateLimitDurationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput">rateLimitThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes">rateLimitDurationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchCondition"></a>

```java
public FrontdoorFirewallPolicyCustomRuleMatchConditionList getMatchCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchConditionList">FrontdoorFirewallPolicyCustomRuleMatchConditionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.matchConditionInput"></a>

```java
public java.lang.Object getMatchConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleMatchCondition">FrontdoorFirewallPolicyCustomRuleMatchCondition</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitDurationInMinutesInput`<sup>Optional</sup> <a name="rateLimitDurationInMinutesInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutesInput"></a>

```java
public java.lang.Number getRateLimitDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitThresholdInput`<sup>Optional</sup> <a name="rateLimitThresholdInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThresholdInput"></a>

```java
public java.lang.Number getRateLimitThresholdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `rateLimitDurationInMinutes`<sup>Required</sup> <a name="rateLimitDurationInMinutes" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitDurationInMinutes"></a>

```java
public java.lang.Number getRateLimitDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.rateLimitThreshold"></a>

```java
public java.lang.Number getRateLimitThreshold();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyCustomRule">FrontdoorFirewallPolicyCustomRule</a>

---


### FrontdoorFirewallPolicyManagedRuleExclusionList <a name="FrontdoorFirewallPolicyManagedRuleExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleExclusionList;

new FrontdoorFirewallPolicyManagedRuleExclusionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get"></a>

```java
public FrontdoorFirewallPolicyManagedRuleExclusionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>>

---


### FrontdoorFirewallPolicyManagedRuleExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference;

new FrontdoorFirewallPolicyManagedRuleExclusionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariableInput"></a>

```java
public java.lang.String getMatchVariableInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>

---


### FrontdoorFirewallPolicyManagedRuleList <a name="FrontdoorFirewallPolicyManagedRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleList;

new FrontdoorFirewallPolicyManagedRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>>

---


### FrontdoorFirewallPolicyManagedRuleOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOutputReference;

new FrontdoorFirewallPolicyManagedRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride">putOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride">resetOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion"></a>

```java
public void putExclusion(IResolvable OR java.util.List<FrontdoorFirewallPolicyManagedRuleExclusion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>>

---

##### `putOverride` <a name="putOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride"></a>

```java
public void putOverride(IResolvable OR java.util.List<FrontdoorFirewallPolicyManagedRuleOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.putOverride.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>>

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetExclusion"></a>

```java
public void resetExclusion()
```

##### `resetOverride` <a name="resetOverride" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.resetOverride"></a>

```java
public void resetOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList">FrontdoorFirewallPolicyManagedRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.override">override</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList">FrontdoorFirewallPolicyManagedRuleOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput">overrideInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusion"></a>

```java
public FrontdoorFirewallPolicyManagedRuleExclusionList getExclusion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusionList">FrontdoorFirewallPolicyManagedRuleExclusionList</a>

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.override"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideList getOverride();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList">FrontdoorFirewallPolicyManagedRuleOverrideList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.exclusionInput"></a>

```java
public java.lang.Object getExclusionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleExclusion">FrontdoorFirewallPolicyManagedRuleExclusion</a>>

---

##### `overrideInput`<sup>Optional</sup> <a name="overrideInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.overrideInput"></a>

```java
public java.lang.Object getOverrideInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRule">FrontdoorFirewallPolicyManagedRule</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideExclusionList <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList;

new FrontdoorFirewallPolicyManagedRuleOverrideExclusionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>>

---


### FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference;

new FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariableInput"></a>

```java
public java.lang.String getMatchVariableInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideList <a name="FrontdoorFirewallPolicyManagedRuleOverrideList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideList;

new FrontdoorFirewallPolicyManagedRuleOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>>

---


### FrontdoorFirewallPolicyManagedRuleOverrideOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference;

new FrontdoorFirewallPolicyManagedRuleOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion"></a>

```java
public void putExclusion(IResolvable OR java.util.List<FrontdoorFirewallPolicyManagedRuleOverrideExclusion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putExclusion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<FrontdoorFirewallPolicyManagedRuleOverrideRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>>

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetExclusion"></a>

```java
public void resetExclusion()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.resetRule"></a>

```java
public void resetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList">FrontdoorFirewallPolicyManagedRuleOverrideRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput">ruleGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName">ruleGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusion"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideExclusionList getExclusion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideExclusionList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.rule"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList">FrontdoorFirewallPolicyManagedRuleOverrideRuleList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.exclusionInput"></a>

```java
public java.lang.Object getExclusionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideExclusion">FrontdoorFirewallPolicyManagedRuleOverrideExclusion</a>>

---

##### `ruleGroupNameInput`<sup>Optional</sup> <a name="ruleGroupNameInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupNameInput"></a>

```java
public java.lang.String getRuleGroupNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>>

---

##### `ruleGroupName`<sup>Required</sup> <a name="ruleGroupName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.ruleGroupName"></a>

```java
public java.lang.String getRuleGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverride">FrontdoorFirewallPolicyManagedRuleOverride</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList;

new FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>>

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference;

new FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput">matchVariableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable">matchVariable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchVariableInput`<sup>Optional</sup> <a name="matchVariableInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariableInput"></a>

```java
public java.lang.String getMatchVariableInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `matchVariable`<sup>Required</sup> <a name="matchVariable" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.matchVariable"></a>

```java
public java.lang.String getMatchVariable();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleList <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleList" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList;

new FrontdoorFirewallPolicyManagedRuleOverrideRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>>

---


### FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference <a name="FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference;

new FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion"></a>

```java
public void putExclusion(IResolvable OR java.util.List<FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.putExclusion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.resetExclusion"></a>

```java
public void resetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusion"></a>

```java
public FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList getExclusion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.exclusionInput"></a>

```java
public java.lang.Object getExclusionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion">FrontdoorFirewallPolicyManagedRuleOverrideRuleExclusion</a>>

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyManagedRuleOverrideRule">FrontdoorFirewallPolicyManagedRuleOverrideRule</a>

---


### FrontdoorFirewallPolicyTimeoutsOutputReference <a name="FrontdoorFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_firewall_policy.FrontdoorFirewallPolicyTimeoutsOutputReference;

new FrontdoorFirewallPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorFirewallPolicy.FrontdoorFirewallPolicyTimeouts">FrontdoorFirewallPolicyTimeouts</a>

---



