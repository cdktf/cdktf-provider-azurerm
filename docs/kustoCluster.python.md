# `azurerm_kusto_cluster`

Refer to the Terraform Registory for docs: [`azurerm_kusto_cluster`](https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster).

# `kustoCluster` Submodule <a name="`kustoCluster` Submodule" id="@cdktf/provider-azurerm.kustoCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoCluster <a name="KustoCluster" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster azurerm_kusto_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku: KustoClusterSku,
  allowed_fqdns: typing.List[str] = None,
  allowed_ip_ranges: typing.List[str] = None,
  auto_stop_enabled: typing.Union[bool, IResolvable] = None,
  disk_encryption_enabled: typing.Union[bool, IResolvable] = None,
  double_encryption_enabled: typing.Union[bool, IResolvable] = None,
  engine: str = None,
  id: str = None,
  identity: KustoClusterIdentity = None,
  language_extensions: typing.List[str] = None,
  optimized_auto_scale: KustoClusterOptimizedAutoScale = None,
  outbound_network_access_restricted: typing.Union[bool, IResolvable] = None,
  public_ip_type: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  purge_enabled: typing.Union[bool, IResolvable] = None,
  streaming_ingestion_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: KustoClusterTimeouts = None,
  trusted_external_tenants: typing.List[str] = None,
  virtual_network_configuration: KustoClusterVirtualNetworkConfiguration = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#location KustoCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#resource_group_name KustoCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.allowedFqdns">allowed_fqdns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_fqdns KustoCluster#allowed_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.allowedIpRanges">allowed_ip_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_ip_ranges KustoCluster#allowed_ip_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.autoStopEnabled">auto_stop_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.diskEncryptionEnabled">disk_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.doubleEncryptionEnabled">double_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine KustoCluster#engine}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#id KustoCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.languageExtensions">language_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#language_extensions KustoCluster#language_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.optimizedAutoScale">optimized_auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a></code> | optimized_auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.outboundNetworkAccessRestricted">outbound_network_access_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#outbound_network_access_restricted KustoCluster#outbound_network_access_restricted}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.publicIpType">public_ip_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_ip_type KustoCluster#public_ip_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.purgeEnabled">purge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#purge_enabled KustoCluster#purge_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.streamingIngestionEnabled">streaming_ingestion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#tags KustoCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.trustedExternalTenants">trusted_external_tenants</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#zones KustoCluster#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#location KustoCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#resource_group_name KustoCluster#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.sku"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

sku block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#sku KustoCluster#sku}

---

##### `allowed_fqdns`<sup>Optional</sup> <a name="allowed_fqdns" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.allowedFqdns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_fqdns KustoCluster#allowed_fqdns}.

---

##### `allowed_ip_ranges`<sup>Optional</sup> <a name="allowed_ip_ranges" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.allowedIpRanges"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_ip_ranges KustoCluster#allowed_ip_ranges}.

---

##### `auto_stop_enabled`<sup>Optional</sup> <a name="auto_stop_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.autoStopEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}.

---

##### `disk_encryption_enabled`<sup>Optional</sup> <a name="disk_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.diskEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}.

---

##### `double_encryption_enabled`<sup>Optional</sup> <a name="double_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.doubleEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine KustoCluster#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#id KustoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#identity KustoCluster#identity}

---

##### `language_extensions`<sup>Optional</sup> <a name="language_extensions" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.languageExtensions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#language_extensions KustoCluster#language_extensions}.

---

##### `optimized_auto_scale`<sup>Optional</sup> <a name="optimized_auto_scale" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.optimizedAutoScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

optimized_auto_scale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#optimized_auto_scale KustoCluster#optimized_auto_scale}

---

##### `outbound_network_access_restricted`<sup>Optional</sup> <a name="outbound_network_access_restricted" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.outboundNetworkAccessRestricted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#outbound_network_access_restricted KustoCluster#outbound_network_access_restricted}.

---

##### `public_ip_type`<sup>Optional</sup> <a name="public_ip_type" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.publicIpType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_ip_type KustoCluster#public_ip_type}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}.

---

##### `purge_enabled`<sup>Optional</sup> <a name="purge_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.purgeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#purge_enabled KustoCluster#purge_enabled}.

---

##### `streaming_ingestion_enabled`<sup>Optional</sup> <a name="streaming_ingestion_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.streamingIngestionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#tags KustoCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#timeouts KustoCluster#timeouts}

---

##### `trusted_external_tenants`<sup>Optional</sup> <a name="trusted_external_tenants" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.trustedExternalTenants"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}.

---

##### `virtual_network_configuration`<sup>Optional</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.virtualNetworkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#virtual_network_configuration KustoCluster#virtual_network_configuration}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#zones KustoCluster#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.putOptimizedAutoScale">put_optimized_auto_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.putSku">put_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration">put_virtual_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetAllowedFqdns">reset_allowed_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetAllowedIpRanges">reset_allowed_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetAutoStopEnabled">reset_auto_stop_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetDiskEncryptionEnabled">reset_disk_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetDoubleEncryptionEnabled">reset_double_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetLanguageExtensions">reset_language_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetOptimizedAutoScale">reset_optimized_auto_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetOutboundNetworkAccessRestricted">reset_outbound_network_access_restricted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetPublicIpType">reset_public_ip_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetPurgeEnabled">reset_purge_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetStreamingIngestionEnabled">reset_streaming_ingestion_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetTrustedExternalTenants">reset_trusted_external_tenants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetVirtualNetworkConfiguration">reset_virtual_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#type KustoCluster#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#identity_ids KustoCluster#identity_ids}.

---

##### `put_optimized_auto_scale` <a name="put_optimized_auto_scale" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putOptimizedAutoScale"></a>

```python
def put_optimized_auto_scale(
  maximum_instances: typing.Union[int, float],
  minimum_instances: typing.Union[int, float]
) -> None
```

###### `maximum_instances`<sup>Required</sup> <a name="maximum_instances" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putOptimizedAutoScale.parameter.maximumInstances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#maximum_instances KustoCluster#maximum_instances}.

---

###### `minimum_instances`<sup>Required</sup> <a name="minimum_instances" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putOptimizedAutoScale.parameter.minimumInstances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#minimum_instances KustoCluster#minimum_instances}.

---

##### `put_sku` <a name="put_sku" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putSku"></a>

```python
def put_sku(
  name: str,
  capacity: typing.Union[int, float] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putSku.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}.

---

###### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putSku.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#capacity KustoCluster#capacity}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#create KustoCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#delete KustoCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#read KustoCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#update KustoCluster#update}.

---

##### `put_virtual_network_configuration` <a name="put_virtual_network_configuration" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration"></a>

```python
def put_virtual_network_configuration(
  data_management_public_ip_id: str,
  engine_public_ip_id: str,
  subnet_id: str
) -> None
```

###### `data_management_public_ip_id`<sup>Required</sup> <a name="data_management_public_ip_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration.parameter.dataManagementPublicIpId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#data_management_public_ip_id KustoCluster#data_management_public_ip_id}.

---

###### `engine_public_ip_id`<sup>Required</sup> <a name="engine_public_ip_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration.parameter.enginePublicIpId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine_public_ip_id KustoCluster#engine_public_ip_id}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.putVirtualNetworkConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#subnet_id KustoCluster#subnet_id}.

---

##### `reset_allowed_fqdns` <a name="reset_allowed_fqdns" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetAllowedFqdns"></a>

```python
def reset_allowed_fqdns() -> None
```

##### `reset_allowed_ip_ranges` <a name="reset_allowed_ip_ranges" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetAllowedIpRanges"></a>

```python
def reset_allowed_ip_ranges() -> None
```

##### `reset_auto_stop_enabled` <a name="reset_auto_stop_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetAutoStopEnabled"></a>

```python
def reset_auto_stop_enabled() -> None
```

##### `reset_disk_encryption_enabled` <a name="reset_disk_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetDiskEncryptionEnabled"></a>

```python
def reset_disk_encryption_enabled() -> None
```

##### `reset_double_encryption_enabled` <a name="reset_double_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetDoubleEncryptionEnabled"></a>

```python
def reset_double_encryption_enabled() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_language_extensions` <a name="reset_language_extensions" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetLanguageExtensions"></a>

```python
def reset_language_extensions() -> None
```

##### `reset_optimized_auto_scale` <a name="reset_optimized_auto_scale" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetOptimizedAutoScale"></a>

```python
def reset_optimized_auto_scale() -> None
```

##### `reset_outbound_network_access_restricted` <a name="reset_outbound_network_access_restricted" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetOutboundNetworkAccessRestricted"></a>

```python
def reset_outbound_network_access_restricted() -> None
```

##### `reset_public_ip_type` <a name="reset_public_ip_type" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetPublicIpType"></a>

```python
def reset_public_ip_type() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_purge_enabled` <a name="reset_purge_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetPurgeEnabled"></a>

```python
def reset_purge_enabled() -> None
```

##### `reset_streaming_ingestion_enabled` <a name="reset_streaming_ingestion_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetStreamingIngestionEnabled"></a>

```python
def reset_streaming_ingestion_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trusted_external_tenants` <a name="reset_trusted_external_tenants" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetTrustedExternalTenants"></a>

```python
def reset_trusted_external_tenants() -> None
```

##### `reset_virtual_network_configuration` <a name="reset_virtual_network_configuration" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetVirtualNetworkConfiguration"></a>

```python
def reset_virtual_network_configuration() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoCluster.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.dataIngestionUri">data_ingestion_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference">KustoClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScale">optimized_auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference">KustoClusterOptimizedAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference">KustoClusterSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference">KustoClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference">KustoClusterVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdnsInput">allowed_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRangesInput">allowed_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabledInput">auto_stop_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabledInput">disk_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabledInput">double_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensionsInput">language_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScaleInput">optimized_auto_scale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestrictedInput">outbound_network_access_restricted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicIpTypeInput">public_ip_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabledInput">purge_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.skuInput">sku_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabledInput">streaming_ingestion_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenantsInput">trusted_external_tenants_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfigurationInput">virtual_network_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdns">allowed_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRanges">allowed_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabled">auto_stop_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabled">disk_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabled">double_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensions">language_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestricted">outbound_network_access_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicIpType">public_ip_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabled">purge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabled">streaming_ingestion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenants">trusted_external_tenants</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_ingestion_uri`<sup>Required</sup> <a name="data_ingestion_uri" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.dataIngestionUri"></a>

```python
data_ingestion_uri: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.identity"></a>

```python
identity: KustoClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference">KustoClusterIdentityOutputReference</a>

---

##### `optimized_auto_scale`<sup>Required</sup> <a name="optimized_auto_scale" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScale"></a>

```python
optimized_auto_scale: KustoClusterOptimizedAutoScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference">KustoClusterOptimizedAutoScaleOutputReference</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.sku"></a>

```python
sku: KustoClusterSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference">KustoClusterSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.timeouts"></a>

```python
timeouts: KustoClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference">KustoClusterTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `virtual_network_configuration`<sup>Required</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfiguration"></a>

```python
virtual_network_configuration: KustoClusterVirtualNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference">KustoClusterVirtualNetworkConfigurationOutputReference</a>

---

##### `allowed_fqdns_input`<sup>Optional</sup> <a name="allowed_fqdns_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdnsInput"></a>

```python
allowed_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_ip_ranges_input`<sup>Optional</sup> <a name="allowed_ip_ranges_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRangesInput"></a>

```python
allowed_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_stop_enabled_input`<sup>Optional</sup> <a name="auto_stop_enabled_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabledInput"></a>

```python
auto_stop_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_encryption_enabled_input`<sup>Optional</sup> <a name="disk_encryption_enabled_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabledInput"></a>

```python
disk_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_encryption_enabled_input`<sup>Optional</sup> <a name="double_encryption_enabled_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabledInput"></a>

```python
double_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.identityInput"></a>

```python
identity_input: KustoClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_extensions_input`<sup>Optional</sup> <a name="language_extensions_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensionsInput"></a>

```python
language_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `optimized_auto_scale_input`<sup>Optional</sup> <a name="optimized_auto_scale_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.optimizedAutoScaleInput"></a>

```python
optimized_auto_scale_input: KustoClusterOptimizedAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

---

##### `outbound_network_access_restricted_input`<sup>Optional</sup> <a name="outbound_network_access_restricted_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestrictedInput"></a>

```python
outbound_network_access_restricted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_ip_type_input`<sup>Optional</sup> <a name="public_ip_type_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicIpTypeInput"></a>

```python
public_ip_type_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_enabled_input`<sup>Optional</sup> <a name="purge_enabled_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabledInput"></a>

```python
purge_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.skuInput"></a>

```python
sku_input: KustoClusterSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

---

##### `streaming_ingestion_enabled_input`<sup>Optional</sup> <a name="streaming_ingestion_enabled_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabledInput"></a>

```python
streaming_ingestion_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[KustoClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>, cdktf.IResolvable]

---

##### `trusted_external_tenants_input`<sup>Optional</sup> <a name="trusted_external_tenants_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenantsInput"></a>

```python
trusted_external_tenants_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_configuration_input`<sup>Optional</sup> <a name="virtual_network_configuration_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.virtualNetworkConfigurationInput"></a>

```python
virtual_network_configuration_input: KustoClusterVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_fqdns`<sup>Required</sup> <a name="allowed_fqdns" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedFqdns"></a>

```python
allowed_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_ip_ranges`<sup>Required</sup> <a name="allowed_ip_ranges" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.allowedIpRanges"></a>

```python
allowed_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_stop_enabled`<sup>Required</sup> <a name="auto_stop_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.autoStopEnabled"></a>

```python
auto_stop_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_encryption_enabled`<sup>Required</sup> <a name="disk_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.diskEncryptionEnabled"></a>

```python
disk_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_encryption_enabled`<sup>Required</sup> <a name="double_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.doubleEncryptionEnabled"></a>

```python
double_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language_extensions`<sup>Required</sup> <a name="language_extensions" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.languageExtensions"></a>

```python
language_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `outbound_network_access_restricted`<sup>Required</sup> <a name="outbound_network_access_restricted" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.outboundNetworkAccessRestricted"></a>

```python
outbound_network_access_restricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_ip_type`<sup>Required</sup> <a name="public_ip_type" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicIpType"></a>

```python
public_ip_type: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_enabled`<sup>Required</sup> <a name="purge_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.purgeEnabled"></a>

```python
purge_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `streaming_ingestion_enabled`<sup>Required</sup> <a name="streaming_ingestion_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.streamingIngestionEnabled"></a>

```python
streaming_ingestion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `trusted_external_tenants`<sup>Required</sup> <a name="trusted_external_tenants" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.trustedExternalTenants"></a>

```python
trusted_external_tenants: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoCluster.KustoCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KustoClusterConfig <a name="KustoClusterConfig" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  sku: KustoClusterSku,
  allowed_fqdns: typing.List[str] = None,
  allowed_ip_ranges: typing.List[str] = None,
  auto_stop_enabled: typing.Union[bool, IResolvable] = None,
  disk_encryption_enabled: typing.Union[bool, IResolvable] = None,
  double_encryption_enabled: typing.Union[bool, IResolvable] = None,
  engine: str = None,
  id: str = None,
  identity: KustoClusterIdentity = None,
  language_extensions: typing.List[str] = None,
  optimized_auto_scale: KustoClusterOptimizedAutoScale = None,
  outbound_network_access_restricted: typing.Union[bool, IResolvable] = None,
  public_ip_type: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  purge_enabled: typing.Union[bool, IResolvable] = None,
  streaming_ingestion_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: KustoClusterTimeouts = None,
  trusted_external_tenants: typing.List[str] = None,
  virtual_network_configuration: KustoClusterVirtualNetworkConfiguration = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#location KustoCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#resource_group_name KustoCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedFqdns">allowed_fqdns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_fqdns KustoCluster#allowed_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedIpRanges">allowed_ip_ranges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_ip_ranges KustoCluster#allowed_ip_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.autoStopEnabled">auto_stop_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.diskEncryptionEnabled">disk_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.doubleEncryptionEnabled">double_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine KustoCluster#engine}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#id KustoCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.languageExtensions">language_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#language_extensions KustoCluster#language_extensions}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.optimizedAutoScale">optimized_auto_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a></code> | optimized_auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.outboundNetworkAccessRestricted">outbound_network_access_restricted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#outbound_network_access_restricted KustoCluster#outbound_network_access_restricted}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicIpType">public_ip_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_ip_type KustoCluster#public_ip_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.purgeEnabled">purge_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#purge_enabled KustoCluster#purge_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.streamingIngestionEnabled">streaming_ingestion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#tags KustoCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.trustedExternalTenants">trusted_external_tenants</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#zones KustoCluster#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#location KustoCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#resource_group_name KustoCluster#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.sku"></a>

```python
sku: KustoClusterSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

sku block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#sku KustoCluster#sku}

---

##### `allowed_fqdns`<sup>Optional</sup> <a name="allowed_fqdns" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedFqdns"></a>

```python
allowed_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_fqdns KustoCluster#allowed_fqdns}.

---

##### `allowed_ip_ranges`<sup>Optional</sup> <a name="allowed_ip_ranges" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.allowedIpRanges"></a>

```python
allowed_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#allowed_ip_ranges KustoCluster#allowed_ip_ranges}.

---

##### `auto_stop_enabled`<sup>Optional</sup> <a name="auto_stop_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.autoStopEnabled"></a>

```python
auto_stop_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#auto_stop_enabled KustoCluster#auto_stop_enabled}.

---

##### `disk_encryption_enabled`<sup>Optional</sup> <a name="disk_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.diskEncryptionEnabled"></a>

```python
disk_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#disk_encryption_enabled KustoCluster#disk_encryption_enabled}.

---

##### `double_encryption_enabled`<sup>Optional</sup> <a name="double_encryption_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.doubleEncryptionEnabled"></a>

```python
double_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#double_encryption_enabled KustoCluster#double_encryption_enabled}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine KustoCluster#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#id KustoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.identity"></a>

```python
identity: KustoClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#identity KustoCluster#identity}

---

##### `language_extensions`<sup>Optional</sup> <a name="language_extensions" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.languageExtensions"></a>

```python
language_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#language_extensions KustoCluster#language_extensions}.

---

##### `optimized_auto_scale`<sup>Optional</sup> <a name="optimized_auto_scale" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.optimizedAutoScale"></a>

```python
optimized_auto_scale: KustoClusterOptimizedAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

optimized_auto_scale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#optimized_auto_scale KustoCluster#optimized_auto_scale}

---

##### `outbound_network_access_restricted`<sup>Optional</sup> <a name="outbound_network_access_restricted" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.outboundNetworkAccessRestricted"></a>

```python
outbound_network_access_restricted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#outbound_network_access_restricted KustoCluster#outbound_network_access_restricted}.

---

##### `public_ip_type`<sup>Optional</sup> <a name="public_ip_type" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicIpType"></a>

```python
public_ip_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_ip_type KustoCluster#public_ip_type}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#public_network_access_enabled KustoCluster#public_network_access_enabled}.

---

##### `purge_enabled`<sup>Optional</sup> <a name="purge_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.purgeEnabled"></a>

```python
purge_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#purge_enabled KustoCluster#purge_enabled}.

---

##### `streaming_ingestion_enabled`<sup>Optional</sup> <a name="streaming_ingestion_enabled" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.streamingIngestionEnabled"></a>

```python
streaming_ingestion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#streaming_ingestion_enabled KustoCluster#streaming_ingestion_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#tags KustoCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.timeouts"></a>

```python
timeouts: KustoClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#timeouts KustoCluster#timeouts}

---

##### `trusted_external_tenants`<sup>Optional</sup> <a name="trusted_external_tenants" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.trustedExternalTenants"></a>

```python
trusted_external_tenants: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#trusted_external_tenants KustoCluster#trusted_external_tenants}.

---

##### `virtual_network_configuration`<sup>Optional</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.virtualNetworkConfiguration"></a>

```python
virtual_network_configuration: KustoClusterVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#virtual_network_configuration KustoCluster#virtual_network_configuration}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#zones KustoCluster#zones}.

---

### KustoClusterIdentity <a name="KustoClusterIdentity" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#type KustoCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#identity_ids KustoCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#type KustoCluster#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#identity_ids KustoCluster#identity_ids}.

---

### KustoClusterOptimizedAutoScale <a name="KustoClusterOptimizedAutoScale" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterOptimizedAutoScale(
  maximum_instances: typing.Union[int, float],
  minimum_instances: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.maximumInstances">maximum_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#maximum_instances KustoCluster#maximum_instances}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.minimumInstances">minimum_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#minimum_instances KustoCluster#minimum_instances}. |

---

##### `maximum_instances`<sup>Required</sup> <a name="maximum_instances" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.maximumInstances"></a>

```python
maximum_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#maximum_instances KustoCluster#maximum_instances}.

---

##### `minimum_instances`<sup>Required</sup> <a name="minimum_instances" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale.property.minimumInstances"></a>

```python
minimum_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#minimum_instances KustoCluster#minimum_instances}.

---

### KustoClusterSku <a name="KustoClusterSku" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterSku(
  name: str,
  capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#capacity KustoCluster#capacity}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSku.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#name KustoCluster#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSku.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#capacity KustoCluster#capacity}.

---

### KustoClusterTimeouts <a name="KustoClusterTimeouts" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#create KustoCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#delete KustoCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#read KustoCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#update KustoCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#create KustoCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#delete KustoCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#read KustoCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#update KustoCluster#update}.

---

### KustoClusterVirtualNetworkConfiguration <a name="KustoClusterVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterVirtualNetworkConfiguration(
  data_management_public_ip_id: str,
  engine_public_ip_id: str,
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.dataManagementPublicIpId">data_management_public_ip_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#data_management_public_ip_id KustoCluster#data_management_public_ip_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.enginePublicIpId">engine_public_ip_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine_public_ip_id KustoCluster#engine_public_ip_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#subnet_id KustoCluster#subnet_id}. |

---

##### `data_management_public_ip_id`<sup>Required</sup> <a name="data_management_public_ip_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.dataManagementPublicIpId"></a>

```python
data_management_public_ip_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#data_management_public_ip_id KustoCluster#data_management_public_ip_id}.

---

##### `engine_public_ip_id`<sup>Required</sup> <a name="engine_public_ip_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.enginePublicIpId"></a>

```python
engine_public_ip_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#engine_public_ip_id KustoCluster#engine_public_ip_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster#subnet_id KustoCluster#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoClusterIdentityOutputReference <a name="KustoClusterIdentityOutputReference" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentityOutputReference.property.internalValue"></a>

```python
internal_value: KustoClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterIdentity">KustoClusterIdentity</a>

---


### KustoClusterOptimizedAutoScaleOutputReference <a name="KustoClusterOptimizedAutoScaleOutputReference" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterOptimizedAutoScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstancesInput">maximum_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstancesInput">minimum_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstances">maximum_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstances">minimum_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_instances_input`<sup>Optional</sup> <a name="maximum_instances_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstancesInput"></a>

```python
maximum_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_instances_input`<sup>Optional</sup> <a name="minimum_instances_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstancesInput"></a>

```python
minimum_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_instances`<sup>Required</sup> <a name="maximum_instances" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.maximumInstances"></a>

```python
maximum_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_instances`<sup>Required</sup> <a name="minimum_instances" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.minimumInstances"></a>

```python
minimum_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScaleOutputReference.property.internalValue"></a>

```python
internal_value: KustoClusterOptimizedAutoScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterOptimizedAutoScale">KustoClusterOptimizedAutoScale</a>

---


### KustoClusterSkuOutputReference <a name="KustoClusterSkuOutputReference" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resetCapacity">reset_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.resetCapacity"></a>

```python
def reset_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterSkuOutputReference.property.internalValue"></a>

```python
internal_value: KustoClusterSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterSku">KustoClusterSku</a>

---


### KustoClusterTimeoutsOutputReference <a name="KustoClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KustoClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterTimeouts">KustoClusterTimeouts</a>, cdktf.IResolvable]

---


### KustoClusterVirtualNetworkConfigurationOutputReference <a name="KustoClusterVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cluster

kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpIdInput">data_management_public_ip_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpIdInput">engine_public_ip_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpId">data_management_public_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpId">engine_public_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_management_public_ip_id_input`<sup>Optional</sup> <a name="data_management_public_ip_id_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpIdInput"></a>

```python
data_management_public_ip_id_input: str
```

- *Type:* str

---

##### `engine_public_ip_id_input`<sup>Optional</sup> <a name="engine_public_ip_id_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpIdInput"></a>

```python
engine_public_ip_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `data_management_public_ip_id`<sup>Required</sup> <a name="data_management_public_ip_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.dataManagementPublicIpId"></a>

```python
data_management_public_ip_id: str
```

- *Type:* str

---

##### `engine_public_ip_id`<sup>Required</sup> <a name="engine_public_ip_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.enginePublicIpId"></a>

```python
engine_public_ip_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KustoClusterVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCluster.KustoClusterVirtualNetworkConfiguration">KustoClusterVirtualNetworkConfiguration</a>

---



