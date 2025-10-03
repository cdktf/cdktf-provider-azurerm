# `privateDnsZoneVirtualNetworkLink` Submodule <a name="`privateDnsZoneVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsZoneVirtualNetworkLink <a name="PrivateDnsZoneVirtualNetworkLink" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link azurerm_private_dns_zone_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLink;

PrivateDnsZoneVirtualNetworkLink.Builder.create(Construct scope, java.lang.String id)
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
    .privateDnsZoneName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .registrationEnabled(java.lang.Boolean)
//  .registrationEnabled(IResolvable)
//  .resolutionPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsZoneVirtualNetworkLinkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.privateDnsZoneName">privateDnsZoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resolutionPolicy">resolutionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resolution_policy PrivateDnsZoneVirtualNetworkLink#resolution_policy}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}.

---

##### `privateDnsZoneName`<sup>Required</sup> <a name="privateDnsZoneName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.privateDnsZoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registrationEnabled`<sup>Optional</sup> <a name="registrationEnabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.registrationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}.

---

##### `resolutionPolicy`<sup>Optional</sup> <a name="resolutionPolicy" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resolutionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resolution_policy PrivateDnsZoneVirtualNetworkLink#resolution_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#timeouts PrivateDnsZoneVirtualNetworkLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled">resetRegistrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetResolutionPolicy">resetResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts"></a>

```java
public void putTimeouts(PrivateDnsZoneVirtualNetworkLinkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId"></a>

```java
public void resetId()
```

##### `resetRegistrationEnabled` <a name="resetRegistrationEnabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled"></a>

```java
public void resetRegistrationEnabled()
```

##### `resetResolutionPolicy` <a name="resetResolutionPolicy" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetResolutionPolicy"></a>

```java
public void resetResolutionPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLink;

PrivateDnsZoneVirtualNetworkLink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLink;

PrivateDnsZoneVirtualNetworkLink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLink;

PrivateDnsZoneVirtualNetworkLink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLink;

PrivateDnsZoneVirtualNetworkLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateDnsZoneVirtualNetworkLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateDnsZoneVirtualNetworkLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateDnsZoneVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsZoneVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput">privateDnsZoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput">registrationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicyInput">resolutionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName">privateDnsZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicy">resolutionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts"></a>

```java
public PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateDnsZoneNameInput`<sup>Optional</sup> <a name="privateDnsZoneNameInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput"></a>

```java
public java.lang.String getPrivateDnsZoneNameInput();
```

- *Type:* java.lang.String

---

##### `registrationEnabledInput`<sup>Optional</sup> <a name="registrationEnabledInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput"></a>

```java
public java.lang.Object getRegistrationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resolutionPolicyInput`<sup>Optional</sup> <a name="resolutionPolicyInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicyInput"></a>

```java
public java.lang.String getResolutionPolicyInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateDnsZoneName`<sup>Required</sup> <a name="privateDnsZoneName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName"></a>

```java
public java.lang.String getPrivateDnsZoneName();
```

- *Type:* java.lang.String

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled"></a>

```java
public java.lang.Object getRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resolutionPolicy`<sup>Required</sup> <a name="resolutionPolicy" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicy"></a>

```java
public java.lang.String getResolutionPolicy();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsZoneVirtualNetworkLinkConfig <a name="PrivateDnsZoneVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLinkConfig;

PrivateDnsZoneVirtualNetworkLinkConfig.builder()
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
    .privateDnsZoneName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualNetworkId(java.lang.String)
//  .id(java.lang.String)
//  .registrationEnabled(java.lang.Boolean)
//  .registrationEnabled(IResolvable)
//  .resolutionPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsZoneVirtualNetworkLinkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName">privateDnsZoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled">registrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resolutionPolicy">resolutionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resolution_policy PrivateDnsZoneVirtualNetworkLink#resolution_policy}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}.

---

##### `privateDnsZoneName`<sup>Required</sup> <a name="privateDnsZoneName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName"></a>

```java
public java.lang.String getPrivateDnsZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registrationEnabled`<sup>Optional</sup> <a name="registrationEnabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled"></a>

```java
public java.lang.Object getRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}.

---

##### `resolutionPolicy`<sup>Optional</sup> <a name="resolutionPolicy" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resolutionPolicy"></a>

```java
public java.lang.String getResolutionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#resolution_policy PrivateDnsZoneVirtualNetworkLink#resolution_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts"></a>

```java
public PrivateDnsZoneVirtualNetworkLinkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#timeouts PrivateDnsZoneVirtualNetworkLink#timeouts}

---

### PrivateDnsZoneVirtualNetworkLinkTimeouts <a name="PrivateDnsZoneVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLinkTimeouts;

PrivateDnsZoneVirtualNetworkLinkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference <a name="PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_zone_virtual_network_link.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference;

new PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---



