# `stackHciLogicalNetwork` Submodule <a name="`stackHciLogicalNetwork` Submodule" id="@cdktf/provider-azurerm.stackHciLogicalNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciLogicalNetwork <a name="StackHciLogicalNetwork" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network azurerm_stack_hci_logical_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetwork;

StackHciLogicalNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .subnet(StackHciLogicalNetworkSubnet)
    .virtualSwitchName(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StackHciLogicalNetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.virtualSwitchName">virtualSwitchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.customLocationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.subnet"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#subnet StackHciLogicalNetwork#subnet}

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.virtualSwitchName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dnsServers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#timeouts StackHciLogicalNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet"></a>

```java
public void putSubnet(StackHciLogicalNetworkSubnet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts"></a>

```java
public void putTimeouts(StackHciLogicalNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

---

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciLogicalNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetwork;

StackHciLogicalNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetwork;

StackHciLogicalNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetwork;

StackHciLogicalNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetwork;

StackHciLogicalNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StackHciLogicalNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StackHciLogicalNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StackHciLogicalNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StackHciLogicalNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StackHciLogicalNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference">StackHciLogicalNetworkSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference">StackHciLogicalNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationIdInput">customLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnetInput">subnetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchNameInput">virtualSwitchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchName">virtualSwitchName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnet"></a>

```java
public StackHciLogicalNetworkSubnetOutputReference getSubnet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference">StackHciLogicalNetworkSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeouts"></a>

```java
public StackHciLogicalNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference">StackHciLogicalNetworkTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationIdInput"></a>

```java
public java.lang.String getCustomLocationIdInput();
```

- *Type:* java.lang.String

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnetInput"></a>

```java
public StackHciLogicalNetworkSubnet getSubnetInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

---

##### `virtualSwitchNameInput`<sup>Optional</sup> <a name="virtualSwitchNameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchNameInput"></a>

```java
public java.lang.String getVirtualSwitchNameInput();
```

- *Type:* java.lang.String

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchName"></a>

```java
public java.lang.String getVirtualSwitchName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciLogicalNetworkConfig <a name="StackHciLogicalNetworkConfig" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkConfig;

StackHciLogicalNetworkConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .subnet(StackHciLogicalNetworkSubnet)
    .virtualSwitchName(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StackHciLogicalNetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.virtualSwitchName">virtualSwitchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.subnet"></a>

```java
public StackHciLogicalNetworkSubnet getSubnet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#subnet StackHciLogicalNetwork#subnet}

---

##### `virtualSwitchName`<sup>Required</sup> <a name="virtualSwitchName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.virtualSwitchName"></a>

```java
public java.lang.String getVirtualSwitchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.timeouts"></a>

```java
public StackHciLogicalNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#timeouts StackHciLogicalNetwork#timeouts}

---

### StackHciLogicalNetworkSubnet <a name="StackHciLogicalNetworkSubnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkSubnet;

StackHciLogicalNetworkSubnet.builder()
    .ipAllocationMethod(java.lang.String)
//  .addressPrefix(java.lang.String)
//  .ipPool(IResolvable)
//  .ipPool(java.util.List<StackHciLogicalNetworkSubnetIpPool>)
//  .route(StackHciLogicalNetworkSubnetRoute)
//  .vlanId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipAllocationMethod">ipAllocationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#ip_allocation_method StackHciLogicalNetwork#ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.addressPrefix">addressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipPool">ipPool</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>></code> | ip_pool block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | route block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#vlan_id StackHciLogicalNetwork#vlan_id}. |

---

##### `ipAllocationMethod`<sup>Required</sup> <a name="ipAllocationMethod" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipAllocationMethod"></a>

```java
public java.lang.String getIpAllocationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#ip_allocation_method StackHciLogicalNetwork#ip_allocation_method}.

---

##### `addressPrefix`<sup>Optional</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.addressPrefix"></a>

```java
public java.lang.String getAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

##### `ipPool`<sup>Optional</sup> <a name="ipPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipPool"></a>

```java
public java.lang.Object getIpPool();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>>

ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#ip_pool StackHciLogicalNetwork#ip_pool}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.route"></a>

```java
public StackHciLogicalNetworkSubnetRoute getRoute();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#route StackHciLogicalNetwork#route}

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#vlan_id StackHciLogicalNetwork#vlan_id}.

---

### StackHciLogicalNetworkSubnetIpPool <a name="StackHciLogicalNetworkSubnetIpPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkSubnetIpPool;

StackHciLogicalNetworkSubnetIpPool.builder()
    .end(java.lang.String)
    .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#end StackHciLogicalNetwork#end}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#start StackHciLogicalNetwork#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#end StackHciLogicalNetwork#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#start StackHciLogicalNetwork#start}.

---

### StackHciLogicalNetworkSubnetRoute <a name="StackHciLogicalNetworkSubnetRoute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkSubnetRoute;

StackHciLogicalNetworkSubnetRoute.builder()
    .addressPrefix(java.lang.String)
    .nextHopIpAddress(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.addressPrefix">addressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.nextHopIpAddress">nextHopIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#next_hop_ip_address StackHciLogicalNetwork#next_hop_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.addressPrefix"></a>

```java
public java.lang.String getAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

##### `nextHopIpAddress`<sup>Required</sup> <a name="nextHopIpAddress" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.nextHopIpAddress"></a>

```java
public java.lang.String getNextHopIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#next_hop_ip_address StackHciLogicalNetwork#next_hop_ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

### StackHciLogicalNetworkTimeouts <a name="StackHciLogicalNetworkTimeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkTimeouts;

StackHciLogicalNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#create StackHciLogicalNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#delete StackHciLogicalNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#read StackHciLogicalNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#update StackHciLogicalNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#create StackHciLogicalNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#delete StackHciLogicalNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#read StackHciLogicalNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/stack_hci_logical_network#update StackHciLogicalNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciLogicalNetworkSubnetIpPoolList <a name="StackHciLogicalNetworkSubnetIpPoolList" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkSubnetIpPoolList;

new StackHciLogicalNetworkSubnetIpPoolList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get"></a>

```java
public StackHciLogicalNetworkSubnetIpPoolOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>>

---


### StackHciLogicalNetworkSubnetIpPoolOutputReference <a name="StackHciLogicalNetworkSubnetIpPoolOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkSubnetIpPoolOutputReference;

new StackHciLogicalNetworkSubnetIpPoolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>

---


### StackHciLogicalNetworkSubnetOutputReference <a name="StackHciLogicalNetworkSubnetOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkSubnetOutputReference;

new StackHciLogicalNetworkSubnetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool">putIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetAddressPrefix">resetAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetIpPool">resetIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpPool` <a name="putIpPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool"></a>

```java
public void putIpPool(IResolvable OR java.util.List<StackHciLogicalNetworkSubnetIpPool> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>>

---

##### `putRoute` <a name="putRoute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute"></a>

```java
public void putRoute(StackHciLogicalNetworkSubnetRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---

##### `resetAddressPrefix` <a name="resetAddressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetAddressPrefix"></a>

```java
public void resetAddressPrefix()
```

##### `resetIpPool` <a name="resetIpPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetIpPool"></a>

```java
public void resetIpPool()
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetRoute"></a>

```java
public void resetRoute()
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetVlanId"></a>

```java
public void resetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPool">ipPool</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList">StackHciLogicalNetworkSubnetIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference">StackHciLogicalNetworkSubnetRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefixInput">addressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethodInput">ipAllocationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPoolInput">ipPoolInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.routeInput">routeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethod">ipAllocationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipPool`<sup>Required</sup> <a name="ipPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPool"></a>

```java
public StackHciLogicalNetworkSubnetIpPoolList getIpPool();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList">StackHciLogicalNetworkSubnetIpPoolList</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.route"></a>

```java
public StackHciLogicalNetworkSubnetRouteOutputReference getRoute();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference">StackHciLogicalNetworkSubnetRouteOutputReference</a>

---

##### `addressPrefixInput`<sup>Optional</sup> <a name="addressPrefixInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefixInput"></a>

```java
public java.lang.String getAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `ipAllocationMethodInput`<sup>Optional</sup> <a name="ipAllocationMethodInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethodInput"></a>

```java
public java.lang.String getIpAllocationMethodInput();
```

- *Type:* java.lang.String

---

##### `ipPoolInput`<sup>Optional</sup> <a name="ipPoolInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPoolInput"></a>

```java
public java.lang.Object getIpPoolInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>>

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.routeInput"></a>

```java
public StackHciLogicalNetworkSubnetRoute getRouteInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanIdInput"></a>

```java
public java.lang.Number getVlanIdInput();
```

- *Type:* java.lang.Number

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefix"></a>

```java
public java.lang.String getAddressPrefix();
```

- *Type:* java.lang.String

---

##### `ipAllocationMethod`<sup>Required</sup> <a name="ipAllocationMethod" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethod"></a>

```java
public java.lang.String getIpAllocationMethod();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.internalValue"></a>

```java
public StackHciLogicalNetworkSubnet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---


### StackHciLogicalNetworkSubnetRouteOutputReference <a name="StackHciLogicalNetworkSubnetRouteOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkSubnetRouteOutputReference;

new StackHciLogicalNetworkSubnetRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefixInput">addressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddressInput">nextHopIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddress">nextHopIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressPrefixInput`<sup>Optional</sup> <a name="addressPrefixInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefixInput"></a>

```java
public java.lang.String getAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nextHopIpAddressInput`<sup>Optional</sup> <a name="nextHopIpAddressInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddressInput"></a>

```java
public java.lang.String getNextHopIpAddressInput();
```

- *Type:* java.lang.String

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefix"></a>

```java
public java.lang.String getAddressPrefix();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nextHopIpAddress`<sup>Required</sup> <a name="nextHopIpAddress" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddress"></a>

```java
public java.lang.String getNextHopIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.internalValue"></a>

```java
public StackHciLogicalNetworkSubnetRoute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---


### StackHciLogicalNetworkTimeoutsOutputReference <a name="StackHciLogicalNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_logical_network.StackHciLogicalNetworkTimeoutsOutputReference;

new StackHciLogicalNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

---



