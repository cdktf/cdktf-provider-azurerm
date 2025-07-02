# `privateDnsResolverVirtualNetworkLink` Submodule <a name="`privateDnsResolverVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverVirtualNetworkLink <a name="PrivateDnsResolverVirtualNetworkLink" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link azurerm_private_dns_resolver_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLink;

PrivateDnsResolverVirtualNetworkLink.Builder.create(Construct scope, java.lang.String id)
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
    .dnsForwardingRulesetId(java.lang.String)
    .name(java.lang.String)
    .virtualNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsResolverVirtualNetworkLinkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dnsForwardingRulesetId">dnsForwardingRulesetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsForwardingRulesetId`<sup>Required</sup> <a name="dnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dnsForwardingRulesetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#timeouts PrivateDnsResolverVirtualNetworkLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts"></a>

```java
public void putTimeouts(PrivateDnsResolverVirtualNetworkLinkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLink;

PrivateDnsResolverVirtualNetworkLink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLink;

PrivateDnsResolverVirtualNetworkLink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLink;

PrivateDnsResolverVirtualNetworkLink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLink;

PrivateDnsResolverVirtualNetworkLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateDnsResolverVirtualNetworkLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateDnsResolverVirtualNetworkLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateDnsResolverVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput">dnsForwardingRulesetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId">dnsForwardingRulesetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeouts"></a>

```java
public PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `dnsForwardingRulesetIdInput`<sup>Optional</sup> <a name="dnsForwardingRulesetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput"></a>

```java
public java.lang.String getDnsForwardingRulesetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `dnsForwardingRulesetId`<sup>Required</sup> <a name="dnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId"></a>

```java
public java.lang.String getDnsForwardingRulesetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverVirtualNetworkLinkConfig <a name="PrivateDnsResolverVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLinkConfig;

PrivateDnsResolverVirtualNetworkLinkConfig.builder()
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
    .dnsForwardingRulesetId(java.lang.String)
    .name(java.lang.String)
    .virtualNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsResolverVirtualNetworkLinkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId">dnsForwardingRulesetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dnsForwardingRulesetId`<sup>Required</sup> <a name="dnsForwardingRulesetId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId"></a>

```java
public java.lang.String getDnsForwardingRulesetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id PrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#name PrivateDnsResolverVirtualNetworkLink#name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#virtual_network_id PrivateDnsResolverVirtualNetworkLink#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#id PrivateDnsResolverVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#metadata PrivateDnsResolverVirtualNetworkLink#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts"></a>

```java
public PrivateDnsResolverVirtualNetworkLinkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#timeouts PrivateDnsResolverVirtualNetworkLink#timeouts}

---

### PrivateDnsResolverVirtualNetworkLinkTimeouts <a name="PrivateDnsResolverVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLinkTimeouts;

PrivateDnsResolverVirtualNetworkLinkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#create PrivateDnsResolverVirtualNetworkLink#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#delete PrivateDnsResolverVirtualNetworkLink#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#read PrivateDnsResolverVirtualNetworkLink#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#update PrivateDnsResolverVirtualNetworkLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#create PrivateDnsResolverVirtualNetworkLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#delete PrivateDnsResolverVirtualNetworkLink#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#read PrivateDnsResolverVirtualNetworkLink#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/private_dns_resolver_virtual_network_link#update PrivateDnsResolverVirtualNetworkLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference <a name="PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_resolver_virtual_network_link.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference;

new PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsResolverVirtualNetworkLink.PrivateDnsResolverVirtualNetworkLinkTimeouts">PrivateDnsResolverVirtualNetworkLinkTimeouts</a>

---



