# `stackHciNetworkInterface` Submodule <a name="`stackHciNetworkInterface` Submodule" id="@cdktf/provider-azurerm.stackHciNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciNetworkInterface <a name="StackHciNetworkInterface" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface azurerm_stack_hci_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterface;

StackHciNetworkInterface.Builder.create(Construct scope, java.lang.String id)
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
    .customLocationId(java.lang.String)
    .ipConfiguration(StackHciNetworkInterfaceIpConfiguration)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .macAddress(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StackHciNetworkInterfaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#custom_location_id StackHciNetworkInterface#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#location StackHciNetworkInterface#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#name StackHciNetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#resource_group_name StackHciNetworkInterface#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#dns_servers StackHciNetworkInterface#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#id StackHciNetworkInterface#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.macAddress">macAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#mac_address StackHciNetworkInterface#mac_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#tags StackHciNetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.customLocationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#custom_location_id StackHciNetworkInterface#custom_location_id}.

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.ipConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#ip_configuration StackHciNetworkInterface#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#location StackHciNetworkInterface#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#name StackHciNetworkInterface#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#resource_group_name StackHciNetworkInterface#resource_group_name}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.dnsServers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#dns_servers StackHciNetworkInterface#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#id StackHciNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.macAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#mac_address StackHciNetworkInterface#mac_address}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#tags StackHciNetworkInterface#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#timeouts StackHciNetworkInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.putIpConfiguration"></a>

```java
public void putIpConfiguration(StackHciNetworkInterfaceIpConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.putTimeouts"></a>

```java
public void putTimeouts(StackHciNetworkInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a>

---

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetId"></a>

```java
public void resetId()
```

##### `resetMacAddress` <a name="resetMacAddress" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetMacAddress"></a>

```java
public void resetMacAddress()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciNetworkInterface resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterface;

StackHciNetworkInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterface;

StackHciNetworkInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterface;

StackHciNetworkInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterface;

StackHciNetworkInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StackHciNetworkInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StackHciNetworkInterface resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StackHciNetworkInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StackHciNetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StackHciNetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference">StackHciNetworkInterfaceIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference">StackHciNetworkInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.customLocationIdInput">customLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.macAddressInput">macAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.ipConfiguration"></a>

```java
public StackHciNetworkInterfaceIpConfigurationOutputReference getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference">StackHciNetworkInterfaceIpConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.timeouts"></a>

```java
public StackHciNetworkInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference">StackHciNetworkInterfaceTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.customLocationIdInput"></a>

```java
public java.lang.String getCustomLocationIdInput();
```

- *Type:* java.lang.String

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.ipConfigurationInput"></a>

```java
public StackHciNetworkInterfaceIpConfiguration getIpConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.macAddressInput"></a>

```java
public java.lang.String getMacAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciNetworkInterfaceConfig <a name="StackHciNetworkInterfaceConfig" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterfaceConfig;

StackHciNetworkInterfaceConfig.builder()
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
    .customLocationId(java.lang.String)
    .ipConfiguration(StackHciNetworkInterfaceIpConfiguration)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .macAddress(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StackHciNetworkInterfaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#custom_location_id StackHciNetworkInterface#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#location StackHciNetworkInterface#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#name StackHciNetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#resource_group_name StackHciNetworkInterface#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#dns_servers StackHciNetworkInterface#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#id StackHciNetworkInterface#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#mac_address StackHciNetworkInterface#mac_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#tags StackHciNetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#custom_location_id StackHciNetworkInterface#custom_location_id}.

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.ipConfiguration"></a>

```java
public StackHciNetworkInterfaceIpConfiguration getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#ip_configuration StackHciNetworkInterface#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#location StackHciNetworkInterface#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#name StackHciNetworkInterface#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#resource_group_name StackHciNetworkInterface#resource_group_name}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#dns_servers StackHciNetworkInterface#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#id StackHciNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#mac_address StackHciNetworkInterface#mac_address}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#tags StackHciNetworkInterface#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceConfig.property.timeouts"></a>

```java
public StackHciNetworkInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#timeouts StackHciNetworkInterface#timeouts}

---

### StackHciNetworkInterfaceIpConfiguration <a name="StackHciNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterfaceIpConfiguration;

StackHciNetworkInterfaceIpConfiguration.builder()
    .subnetId(java.lang.String)
//  .privateIpAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#subnet_id StackHciNetworkInterface#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#private_ip_address StackHciNetworkInterface#private_ip_address}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#subnet_id StackHciNetworkInterface#subnet_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#private_ip_address StackHciNetworkInterface#private_ip_address}.

---

### StackHciNetworkInterfaceTimeouts <a name="StackHciNetworkInterfaceTimeouts" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterfaceTimeouts;

StackHciNetworkInterfaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#create StackHciNetworkInterface#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#delete StackHciNetworkInterface#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#read StackHciNetworkInterface#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#update StackHciNetworkInterface#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#create StackHciNetworkInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#delete StackHciNetworkInterface#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#read StackHciNetworkInterface#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/stack_hci_network_interface#update StackHciNetworkInterface#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciNetworkInterfaceIpConfigurationOutputReference <a name="StackHciNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterfaceIpConfigurationOutputReference;

new StackHciNetworkInterfaceIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.prefixLength">prefixLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.prefixLength"></a>

```java
public java.lang.String getPrefixLength();
```

- *Type:* java.lang.String

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```java
public StackHciNetworkInterfaceIpConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceIpConfiguration">StackHciNetworkInterfaceIpConfiguration</a>

---


### StackHciNetworkInterfaceTimeoutsOutputReference <a name="StackHciNetworkInterfaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_network_interface.StackHciNetworkInterfaceTimeoutsOutputReference;

new StackHciNetworkInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciNetworkInterface.StackHciNetworkInterfaceTimeouts">StackHciNetworkInterfaceTimeouts</a>

---



