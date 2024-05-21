# `paloAltoNextGenerationFirewallVirtualNetworkPanorama` Submodule <a name="`paloAltoNextGenerationFirewallVirtualNetworkPanorama` Submodule" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoNextGenerationFirewallVirtualNetworkPanorama <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanorama" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama azurerm_palo_alto_next_generation_firewall_virtual_network_panorama}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama;

PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .networkProfile(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile)
    .panoramaBase64Config(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .destinationNat(IResolvable)
//  .destinationNat(java.util.List<PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat>)
//  .dnsSettings(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#location PaloAltoNextGenerationFirewallVirtualNetworkPanorama#location}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.panoramaBase64Config">panoramaBase64Config</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#panorama_base64_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#panorama_base64_config}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.destinationNat">destinationNat</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>></code> | destination_nat block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#tags PaloAltoNextGenerationFirewallVirtualNetworkPanorama#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#location PaloAltoNextGenerationFirewallVirtualNetworkPanorama#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#network_profile PaloAltoNextGenerationFirewallVirtualNetworkPanorama#network_profile}

---

##### `panoramaBase64Config`<sup>Required</sup> <a name="panoramaBase64Config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.panoramaBase64Config"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#panorama_base64_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#panorama_base64_config}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#resource_group_name}.

---

##### `destinationNat`<sup>Optional</sup> <a name="destinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.destinationNat"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>>

destination_nat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#destination_nat PaloAltoNextGenerationFirewallVirtualNetworkPanorama#destination_nat}

---

##### `dnsSettings`<sup>Optional</sup> <a name="dnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.dnsSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#dns_settings PaloAltoNextGenerationFirewallVirtualNetworkPanorama#dns_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#tags PaloAltoNextGenerationFirewallVirtualNetworkPanorama#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#timeouts PaloAltoNextGenerationFirewallVirtualNetworkPanorama#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putDestinationNat">putDestinationNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putDnsSettings">putDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putNetworkProfile">putNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetDestinationNat">resetDestinationNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetDnsSettings">resetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationNat` <a name="putDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putDestinationNat"></a>

```java
public void putDestinationNat(IResolvable OR java.util.List<PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putDestinationNat.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>>

---

##### `putDnsSettings` <a name="putDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putDnsSettings"></a>

```java
public void putDnsSettings(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a>

---

##### `putNetworkProfile` <a name="putNetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putNetworkProfile"></a>

```java
public void putNetworkProfile(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putTimeouts"></a>

```java
public void putTimeouts(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a>

---

##### `resetDestinationNat` <a name="resetDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetDestinationNat"></a>

```java
public void resetDestinationNat()
```

##### `resetDnsSettings` <a name="resetDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetDnsSettings"></a>

```java
public void resetDnsSettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualNetworkPanorama resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama;

PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama;

PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama;

PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama;

PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualNetworkPanorama resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PaloAltoNextGenerationFirewallVirtualNetworkPanorama to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PaloAltoNextGenerationFirewallVirtualNetworkPanorama that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoNextGenerationFirewallVirtualNetworkPanorama to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.destinationNat">destinationNat</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.panorama">panorama</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.destinationNatInput">destinationNatInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.dnsSettingsInput">dnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.networkProfileInput">networkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.panoramaBase64ConfigInput">panoramaBase64ConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.panoramaBase64Config">panoramaBase64Config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationNat`<sup>Required</sup> <a name="destinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.destinationNat"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList getDestinationNat();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList</a>

---

##### `dnsSettings`<sup>Required</sup> <a name="dnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.dnsSettings"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference getDnsSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference</a>

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.networkProfile"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference</a>

---

##### `panorama`<sup>Required</sup> <a name="panorama" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.panorama"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList getPanorama();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.timeouts"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference</a>

---

##### `destinationNatInput`<sup>Optional</sup> <a name="destinationNatInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.destinationNatInput"></a>

```java
public java.lang.Object getDestinationNatInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>>

---

##### `dnsSettingsInput`<sup>Optional</sup> <a name="dnsSettingsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.dnsSettingsInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings getDnsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.networkProfileInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile getNetworkProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a>

---

##### `panoramaBase64ConfigInput`<sup>Optional</sup> <a name="panoramaBase64ConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.panoramaBase64ConfigInput"></a>

```java
public java.lang.String getPanoramaBase64ConfigInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `panoramaBase64Config`<sup>Required</sup> <a name="panoramaBase64Config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.panoramaBase64Config"></a>

```java
public java.lang.String getPanoramaBase64Config();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanorama.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .networkProfile(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile)
    .panoramaBase64Config(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .destinationNat(IResolvable)
//  .destinationNat(java.util.List<PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat>)
//  .dnsSettings(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#location PaloAltoNextGenerationFirewallVirtualNetworkPanorama#location}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.panoramaBase64Config">panoramaBase64Config</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#panorama_base64_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#panorama_base64_config}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.destinationNat">destinationNat</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>></code> | destination_nat block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#tags PaloAltoNextGenerationFirewallVirtualNetworkPanorama#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#location PaloAltoNextGenerationFirewallVirtualNetworkPanorama#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.networkProfile"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#network_profile PaloAltoNextGenerationFirewallVirtualNetworkPanorama#network_profile}

---

##### `panoramaBase64Config`<sup>Required</sup> <a name="panoramaBase64Config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.panoramaBase64Config"></a>

```java
public java.lang.String getPanoramaBase64Config();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#panorama_base64_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#panorama_base64_config}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#resource_group_name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#resource_group_name}.

---

##### `destinationNat`<sup>Optional</sup> <a name="destinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.destinationNat"></a>

```java
public java.lang.Object getDestinationNat();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>>

destination_nat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#destination_nat PaloAltoNextGenerationFirewallVirtualNetworkPanorama#destination_nat}

---

##### `dnsSettings`<sup>Optional</sup> <a name="dnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.dnsSettings"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings getDnsSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#dns_settings PaloAltoNextGenerationFirewallVirtualNetworkPanorama#dns_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#tags PaloAltoNextGenerationFirewallVirtualNetworkPanorama#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaConfig.property.timeouts"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#timeouts PaloAltoNextGenerationFirewallVirtualNetworkPanorama#timeouts}

---

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.builder()
    .name(java.lang.String)
    .protocol(java.lang.String)
//  .backendConfig(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig)
//  .frontendConfig(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#protocol PaloAltoNextGenerationFirewallVirtualNetworkPanorama#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.backendConfig">backendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig</a></code> | backend_config block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.frontendConfig">frontendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig</a></code> | frontend_config block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#name PaloAltoNextGenerationFirewallVirtualNetworkPanorama#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#protocol PaloAltoNextGenerationFirewallVirtualNetworkPanorama#protocol}.

---

##### `backendConfig`<sup>Optional</sup> <a name="backendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.backendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig getBackendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#backend_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#backend_config}

---

##### `frontendConfig`<sup>Optional</sup> <a name="frontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat.property.frontendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig getFrontendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig</a>

frontend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#frontend_config PaloAltoNextGenerationFirewallVirtualNetworkPanorama#frontend_config}

---

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig.builder()
    .port(java.lang.Number)
    .publicIpAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#port PaloAltoNextGenerationFirewallVirtualNetworkPanorama#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#port PaloAltoNextGenerationFirewallVirtualNetworkPanorama#port}.

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig.builder()
    .port(java.lang.Number)
    .publicIpAddressId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#port PaloAltoNextGenerationFirewallVirtualNetworkPanorama#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address_id}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#port PaloAltoNextGenerationFirewallVirtualNetworkPanorama#port}.

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address_id}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings.builder()
//  .dnsServers(java.util.List<java.lang.String>)
//  .useAzureDns(java.lang.Boolean)
//  .useAzureDns(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#dns_servers PaloAltoNextGenerationFirewallVirtualNetworkPanorama#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings.property.useAzureDns">useAzureDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#use_azure_dns PaloAltoNextGenerationFirewallVirtualNetworkPanorama#use_azure_dns}. |

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#dns_servers PaloAltoNextGenerationFirewallVirtualNetworkPanorama#dns_servers}.

---

##### `useAzureDns`<sup>Optional</sup> <a name="useAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings.property.useAzureDns"></a>

```java
public java.lang.Object getUseAzureDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#use_azure_dns PaloAltoNextGenerationFirewallVirtualNetworkPanorama#use_azure_dns}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.builder()
    .publicIpAddressIds(java.util.List<java.lang.String>)
    .vnetConfiguration(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration)
//  .egressNatIpAddressIds(java.util.List<java.lang.String>)
//  .trustedAddressRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.publicIpAddressIds">publicIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.vnetConfiguration">vnetConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration</a></code> | vnet_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.egressNatIpAddressIds">egressNatIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkPanorama#egress_nat_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.trustedAddressRanges">trustedAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualNetworkPanorama#trusted_address_ranges}. |

---

##### `publicIpAddressIds`<sup>Required</sup> <a name="publicIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.publicIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkPanorama#public_ip_address_ids}.

---

##### `vnetConfiguration`<sup>Required</sup> <a name="vnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.vnetConfiguration"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration getVnetConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration</a>

vnet_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#vnet_configuration PaloAltoNextGenerationFirewallVirtualNetworkPanorama#vnet_configuration}

---

##### `egressNatIpAddressIds`<sup>Optional</sup> <a name="egressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.egressNatIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualNetworkPanorama#egress_nat_ip_address_ids}.

---

##### `trustedAddressRanges`<sup>Optional</sup> <a name="trustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile.property.trustedAddressRanges"></a>

```java
public java.util.List<java.lang.String> getTrustedAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualNetworkPanorama#trusted_address_ranges}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.builder()
    .virtualNetworkId(java.lang.String)
//  .trustedSubnetId(java.lang.String)
//  .untrustedSubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#virtual_network_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.property.trustedSubnetId">trustedSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#trusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#trusted_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.property.untrustedSubnetId">untrustedSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#untrusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#untrusted_subnet_id}. |

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#virtual_network_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#virtual_network_id}.

---

##### `trustedSubnetId`<sup>Optional</sup> <a name="trustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.property.trustedSubnetId"></a>

```java
public java.lang.String getTrustedSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#trusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#trusted_subnet_id}.

---

##### `untrustedSubnetId`<sup>Optional</sup> <a name="untrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration.property.untrustedSubnetId"></a>

```java
public java.lang.String getUntrustedSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#untrusted_subnet_id PaloAltoNextGenerationFirewallVirtualNetworkPanorama#untrusted_subnet_id}.

---

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama.builder()
    .build();
```


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts;

PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#create PaloAltoNextGenerationFirewallVirtualNetworkPanorama#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#delete PaloAltoNextGenerationFirewallVirtualNetworkPanorama#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#read PaloAltoNextGenerationFirewallVirtualNetworkPanorama#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#update PaloAltoNextGenerationFirewallVirtualNetworkPanorama#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#create PaloAltoNextGenerationFirewallVirtualNetworkPanorama#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#delete PaloAltoNextGenerationFirewallVirtualNetworkPanorama#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#read PaloAltoNextGenerationFirewallVirtualNetworkPanorama#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/palo_alto_next_generation_firewall_virtual_network_panorama#update PaloAltoNextGenerationFirewallVirtualNetworkPanorama#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddressInput">publicIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publicIpAddressInput`<sup>Optional</sup> <a name="publicIpAddressInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddressInput"></a>

```java
public java.lang.String getPublicIpAddressInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput"></a>

```java
public java.lang.String getPublicIpAddressIdInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.get"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.putBackendConfig">putBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.putFrontendConfig">putFrontendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.resetBackendConfig">resetBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.resetFrontendConfig">resetFrontendConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackendConfig` <a name="putBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.putBackendConfig"></a>

```java
public void putBackendConfig(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.putBackendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig</a>

---

##### `putFrontendConfig` <a name="putFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.putFrontendConfig"></a>

```java
public void putFrontendConfig(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.putFrontendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig</a>

---

##### `resetBackendConfig` <a name="resetBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.resetBackendConfig"></a>

```java
public void resetBackendConfig()
```

##### `resetFrontendConfig` <a name="resetFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.resetFrontendConfig"></a>

```java
public void resetFrontendConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.backendConfig">backendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.frontendConfig">frontendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.backendConfigInput">backendConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.frontendConfigInput">frontendConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendConfig`<sup>Required</sup> <a name="backendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.backendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference getBackendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfigOutputReference</a>

---

##### `frontendConfig`<sup>Required</sup> <a name="frontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.frontendConfig"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference getFrontendConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfigOutputReference</a>

---

##### `backendConfigInput`<sup>Optional</sup> <a name="backendConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.backendConfigInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig getBackendConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatBackendConfig</a>

---

##### `frontendConfigInput`<sup>Optional</sup> <a name="frontendConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.frontendConfigInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig getFrontendConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatFrontendConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNatOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDestinationNat</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.resetUseAzureDns">resetUseAzureDns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetUseAzureDns` <a name="resetUseAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.resetUseAzureDns"></a>

```java
public void resetUseAzureDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.azureDnsServers">azureDnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.useAzureDnsInput">useAzureDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.useAzureDns">useAzureDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureDnsServers`<sup>Required</sup> <a name="azureDnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.azureDnsServers"></a>

```java
public java.util.List<java.lang.String> getAzureDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useAzureDnsInput`<sup>Optional</sup> <a name="useAzureDnsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.useAzureDnsInput"></a>

```java
public java.lang.Object getUseAzureDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useAzureDns`<sup>Required</sup> <a name="useAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.useAzureDns"></a>

```java
public java.lang.Object getUseAzureDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettingsOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaDnsSettings</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.putVnetConfiguration">putVnetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.resetEgressNatIpAddressIds">resetEgressNatIpAddressIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.resetTrustedAddressRanges">resetTrustedAddressRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVnetConfiguration` <a name="putVnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.putVnetConfiguration"></a>

```java
public void putVnetConfiguration(PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.putVnetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration</a>

---

##### `resetEgressNatIpAddressIds` <a name="resetEgressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.resetEgressNatIpAddressIds"></a>

```java
public void resetEgressNatIpAddressIds()
```

##### `resetTrustedAddressRanges` <a name="resetTrustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.resetTrustedAddressRanges"></a>

```java
public void resetTrustedAddressRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.egressNatIpAddresses">egressNatIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.publicIpAddresses">publicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.vnetConfiguration">vnetConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIdsInput">egressNatIpAddressIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.publicIpAddressIdsInput">publicIpAddressIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.trustedAddressRangesInput">trustedAddressRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.vnetConfigurationInput">vnetConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIds">egressNatIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.publicIpAddressIds">publicIpAddressIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.trustedAddressRanges">trustedAddressRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressNatIpAddresses`<sup>Required</sup> <a name="egressNatIpAddresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.egressNatIpAddresses"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.publicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vnetConfiguration`<sup>Required</sup> <a name="vnetConfiguration" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.vnetConfiguration"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference getVnetConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference</a>

---

##### `egressNatIpAddressIdsInput`<sup>Optional</sup> <a name="egressNatIpAddressIdsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIdsInput"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddressIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddressIdsInput`<sup>Optional</sup> <a name="publicIpAddressIdsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.publicIpAddressIdsInput"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddressIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedAddressRangesInput`<sup>Optional</sup> <a name="trustedAddressRangesInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.trustedAddressRangesInput"></a>

```java
public java.util.List<java.lang.String> getTrustedAddressRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vnetConfigurationInput`<sup>Optional</sup> <a name="vnetConfigurationInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.vnetConfigurationInput"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration getVnetConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration</a>

---

##### `egressNatIpAddressIds`<sup>Required</sup> <a name="egressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getEgressNatIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddressIds`<sup>Required</sup> <a name="publicIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.publicIpAddressIds"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddressIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedAddressRanges`<sup>Required</sup> <a name="trustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.trustedAddressRanges"></a>

```java
public java.util.List<java.lang.String> getTrustedAddressRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfile</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.resetTrustedSubnetId">resetTrustedSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.resetUntrustedSubnetId">resetUntrustedSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustedSubnetId` <a name="resetTrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.resetTrustedSubnetId"></a>

```java
public void resetTrustedSubnetId()
```

##### `resetUntrustedSubnetId` <a name="resetUntrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.resetUntrustedSubnetId"></a>

```java
public void resetUntrustedSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.ipOfTrustForUserDefinedRoutes">ipOfTrustForUserDefinedRoutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetIdInput">trustedSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetIdInput">untrustedSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetId">trustedSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetId">untrustedSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipOfTrustForUserDefinedRoutes`<sup>Required</sup> <a name="ipOfTrustForUserDefinedRoutes" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.ipOfTrustForUserDefinedRoutes"></a>

```java
public java.lang.String getIpOfTrustForUserDefinedRoutes();
```

- *Type:* java.lang.String

---

##### `trustedSubnetIdInput`<sup>Optional</sup> <a name="trustedSubnetIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetIdInput"></a>

```java
public java.lang.String getTrustedSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `untrustedSubnetIdInput`<sup>Optional</sup> <a name="untrustedSubnetIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetIdInput"></a>

```java
public java.lang.String getUntrustedSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `trustedSubnetId`<sup>Required</sup> <a name="trustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.trustedSubnetId"></a>

```java
public java.lang.String getTrustedSubnetId();
```

- *Type:* java.lang.String

---

##### `untrustedSubnetId`<sup>Required</sup> <a name="untrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.untrustedSubnetId"></a>

```java
public java.lang.String getUntrustedSubnetId();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfigurationOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaNetworkProfileVnetConfiguration</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.get"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.deviceGroupName">deviceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.panoramaServer1">panoramaServer1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.panoramaServer2">panoramaServer2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.virtualMachineSshKey">virtualMachineSshKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceGroupName`<sup>Required</sup> <a name="deviceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.deviceGroupName"></a>

```java
public java.lang.String getDeviceGroupName();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `panoramaServer1`<sup>Required</sup> <a name="panoramaServer1" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.panoramaServer1"></a>

```java
public java.lang.String getPanoramaServer1();
```

- *Type:* java.lang.String

---

##### `panoramaServer2`<sup>Required</sup> <a name="panoramaServer2" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.panoramaServer2"></a>

```java
public java.lang.String getPanoramaServer2();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `virtualMachineSshKey`<sup>Required</sup> <a name="virtualMachineSshKey" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.virtualMachineSshKey"></a>

```java
public java.lang.String getVirtualMachineSshKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanoramaOutputReference.property.internalValue"></a>

```java
public PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaPanorama</a>

---


### PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.palo_alto_next_generation_firewall_virtual_network_panorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference;

new PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualNetworkPanorama.PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualNetworkPanoramaTimeouts</a>

---



