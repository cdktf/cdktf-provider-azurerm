# `azurerm_media_streaming_policy`

Refer to the Terraform Registory for docs: [`azurerm_media_streaming_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy).

# `mediaStreamingPolicy` Submodule <a name="`mediaStreamingPolicy` Submodule" id="@cdktf/provider-azurerm.mediaStreamingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingPolicy <a name="MediaStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy azurerm_media_streaming_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicy(scope: Construct, id: string, config: MediaStreamingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig">MediaStreamingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig">MediaStreamingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs">putCommonEncryptionCbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc">putCommonEncryptionCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putEnvelopeEncryption">putEnvelopeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols">putNoEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCbcs">resetCommonEncryptionCbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCenc">resetCommonEncryptionCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetDefaultContentKeyPolicyName">resetDefaultContentKeyPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetEnvelopeEncryption">resetEnvelopeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetNoEncryptionEnabledProtocols">resetNoEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCommonEncryptionCbcs` <a name="putCommonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs"></a>

```typescript
public putCommonEncryptionCbcs(value: MediaStreamingPolicyCommonEncryptionCbcs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCbcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---

##### `putCommonEncryptionCenc` <a name="putCommonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc"></a>

```typescript
public putCommonEncryptionCenc(value: MediaStreamingPolicyCommonEncryptionCenc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putCommonEncryptionCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---

##### `putEnvelopeEncryption` <a name="putEnvelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putEnvelopeEncryption"></a>

```typescript
public putEnvelopeEncryption(value: MediaStreamingPolicyEnvelopeEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putEnvelopeEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

---

##### `putNoEncryptionEnabledProtocols` <a name="putNoEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols"></a>

```typescript
public putNoEncryptionEnabledProtocols(value: MediaStreamingPolicyNoEncryptionEnabledProtocols): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putNoEncryptionEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaStreamingPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

---

##### `resetCommonEncryptionCbcs` <a name="resetCommonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCbcs"></a>

```typescript
public resetCommonEncryptionCbcs(): void
```

##### `resetCommonEncryptionCenc` <a name="resetCommonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetCommonEncryptionCenc"></a>

```typescript
public resetCommonEncryptionCenc(): void
```

##### `resetDefaultContentKeyPolicyName` <a name="resetDefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetDefaultContentKeyPolicyName"></a>

```typescript
public resetDefaultContentKeyPolicyName(): void
```

##### `resetEnvelopeEncryption` <a name="resetEnvelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetEnvelopeEncryption"></a>

```typescript
public resetEnvelopeEncryption(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNoEncryptionEnabledProtocols` <a name="resetNoEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetNoEncryptionEnabledProtocols"></a>

```typescript
public resetNoEncryptionEnabledProtocols(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

mediaStreamingPolicy.MediaStreamingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcs">commonEncryptionCbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCenc">commonEncryptionCenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference">MediaStreamingPolicyCommonEncryptionCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryption">envelopeEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference">MediaStreamingPolicyEnvelopeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocols">noEncryptionEnabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference">MediaStreamingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcsInput">commonEncryptionCbcsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCencInput">commonEncryptionCencInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyNameInput">defaultContentKeyPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryptionInput">envelopeEncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocolsInput">noEncryptionEnabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyName">defaultContentKeyPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commonEncryptionCbcs`<sup>Required</sup> <a name="commonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcs"></a>

```typescript
public readonly commonEncryptionCbcs: MediaStreamingPolicyCommonEncryptionCbcsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsOutputReference</a>

---

##### `commonEncryptionCenc`<sup>Required</sup> <a name="commonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCenc"></a>

```typescript
public readonly commonEncryptionCenc: MediaStreamingPolicyCommonEncryptionCencOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference">MediaStreamingPolicyCommonEncryptionCencOutputReference</a>

---

##### `envelopeEncryption`<sup>Required</sup> <a name="envelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryption"></a>

```typescript
public readonly envelopeEncryption: MediaStreamingPolicyEnvelopeEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference">MediaStreamingPolicyEnvelopeEncryptionOutputReference</a>

---

##### `noEncryptionEnabledProtocols`<sup>Required</sup> <a name="noEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocols"></a>

```typescript
public readonly noEncryptionEnabledProtocols: MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: MediaStreamingPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference">MediaStreamingPolicyTimeoutsOutputReference</a>

---

##### `commonEncryptionCbcsInput`<sup>Optional</sup> <a name="commonEncryptionCbcsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCbcsInput"></a>

```typescript
public readonly commonEncryptionCbcsInput: MediaStreamingPolicyCommonEncryptionCbcs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---

##### `commonEncryptionCencInput`<sup>Optional</sup> <a name="commonEncryptionCencInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.commonEncryptionCencInput"></a>

```typescript
public readonly commonEncryptionCencInput: MediaStreamingPolicyCommonEncryptionCenc;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---

##### `defaultContentKeyPolicyNameInput`<sup>Optional</sup> <a name="defaultContentKeyPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyNameInput"></a>

```typescript
public readonly defaultContentKeyPolicyNameInput: string;
```

- *Type:* string

---

##### `envelopeEncryptionInput`<sup>Optional</sup> <a name="envelopeEncryptionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.envelopeEncryptionInput"></a>

```typescript
public readonly envelopeEncryptionInput: MediaStreamingPolicyEnvelopeEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountNameInput"></a>

```typescript
public readonly mediaServicesAccountNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `noEncryptionEnabledProtocolsInput`<sup>Optional</sup> <a name="noEncryptionEnabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.noEncryptionEnabledProtocolsInput"></a>

```typescript
public readonly noEncryptionEnabledProtocolsInput: MediaStreamingPolicyNoEncryptionEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MediaStreamingPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a> | cdktf.IResolvable

---

##### `defaultContentKeyPolicyName`<sup>Required</sup> <a name="defaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.defaultContentKeyPolicyName"></a>

```typescript
public readonly defaultContentKeyPolicyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingPolicyCommonEncryptionCbcs <a name="MediaStreamingPolicyCommonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCbcs: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a></code> | clear_key_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.drmFairplay">drmFairplay</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | drm_fairplay block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `clearKeyEncryption`<sup>Optional</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.clearKeyEncryption"></a>

```typescript
public readonly clearKeyEncryption: MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

clear_key_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#clear_key_encryption MediaStreamingPolicy#clear_key_encryption}

---

##### `defaultContentKey`<sup>Optional</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.defaultContentKey"></a>

```typescript
public readonly defaultContentKey: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `drmFairplay`<sup>Optional</sup> <a name="drmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.drmFairplay"></a>

```typescript
public readonly drmFairplay: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

drm_fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#drm_fairplay MediaStreamingPolicy#drm_fairplay}

---

##### `enabledProtocols`<sup>Optional</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs.property.enabledProtocols"></a>

```typescript
public readonly enabledProtocols: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption <a name="MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}. |

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption.property.customKeysAcquisitionUrlTemplate"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey <a name="MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay <a name="MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCbcsDrmFairplay: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.allowPersistentLicense">allowPersistentLicense</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}. |

---

##### `allowPersistentLicense`<sup>Optional</sup> <a name="allowPersistentLicense" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.allowPersistentLicense"></a>

```typescript
public readonly allowPersistentLicense: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#allow_persistent_license MediaStreamingPolicy#allow_persistent_license}.

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay.property.customLicenseAcquisitionUrlTemplate"></a>

```typescript
public readonly customLicenseAcquisitionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols <a name="MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyCommonEncryptionCenc <a name="MediaStreamingPolicyCommonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCenc: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a></code> | clear_key_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearTrack">clearTrack</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>[]</code> | clear_track block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.contentKeyToTrackMapping">contentKeyToTrackMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>[]</code> | content_key_to_track_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmPlayready">drmPlayready</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | drm_playready block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmWidevineCustomLicenseAcquisitionUrlTemplate">drmWidevineCustomLicenseAcquisitionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `clearKeyEncryption`<sup>Optional</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearKeyEncryption"></a>

```typescript
public readonly clearKeyEncryption: MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

clear_key_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#clear_key_encryption MediaStreamingPolicy#clear_key_encryption}

---

##### `clearTrack`<sup>Optional</sup> <a name="clearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.clearTrack"></a>

```typescript
public readonly clearTrack: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>[]

clear_track block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#clear_track MediaStreamingPolicy#clear_track}

---

##### `contentKeyToTrackMapping`<sup>Optional</sup> <a name="contentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.contentKeyToTrackMapping"></a>

```typescript
public readonly contentKeyToTrackMapping: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>[]

content_key_to_track_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#content_key_to_track_mapping MediaStreamingPolicy#content_key_to_track_mapping}

---

##### `defaultContentKey`<sup>Optional</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.defaultContentKey"></a>

```typescript
public readonly defaultContentKey: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `drmPlayready`<sup>Optional</sup> <a name="drmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmPlayready"></a>

```typescript
public readonly drmPlayready: MediaStreamingPolicyCommonEncryptionCencDrmPlayready;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

drm_playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#drm_playready MediaStreamingPolicy#drm_playready}

---

##### `drmWidevineCustomLicenseAcquisitionUrlTemplate`<sup>Optional</sup> <a name="drmWidevineCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.drmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```typescript
public readonly drmWidevineCustomLicenseAcquisitionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#drm_widevine_custom_license_acquisition_url_template MediaStreamingPolicy#drm_widevine_custom_license_acquisition_url_template}.

---

##### `enabledProtocols`<sup>Optional</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc.property.enabledProtocols"></a>

```typescript
public readonly enabledProtocols: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption <a name="MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencClearKeyEncryption: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}. |

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption.property.customKeysAcquisitionUrlTemplate"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCencClearTrack <a name="MediaStreamingPolicyCommonEncryptionCencClearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencClearTrack: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>[]</code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack.property.condition"></a>

```typescript
public readonly condition: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrackCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#condition MediaStreamingPolicy#condition}

---

### MediaStreamingPolicyCommonEncryptionCencClearTrackCondition <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencClearTrackCondition: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.property">property</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}.

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}.

---

### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.track">track</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>[]</code> | track block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `track`<sup>Required</sup> <a name="track" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.track"></a>

```typescript
public readonly track: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>[]

track block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#track MediaStreamingPolicy#track}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>[]</code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack.property.condition"></a>

```typescript
public readonly condition: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#condition MediaStreamingPolicy#condition}

---

### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.property">property</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#operation MediaStreamingPolicy#operation}.

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#property MediaStreamingPolicy#property}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#value MediaStreamingPolicy#value}.

---

### MediaStreamingPolicyCommonEncryptionCencDefaultContentKey <a name="MediaStreamingPolicyCommonEncryptionCencDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencDefaultContentKey: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyCommonEncryptionCencDrmPlayready <a name="MediaStreamingPolicyCommonEncryptionCencDrmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencDrmPlayready: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customAttributes">customAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}. |

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customAttributes"></a>

```typescript
public readonly customAttributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_attributes MediaStreamingPolicy#custom_attributes}.

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready.property.customLicenseAcquisitionUrlTemplate"></a>

```typescript
public readonly customLicenseAcquisitionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_license_acquisition_url_template MediaStreamingPolicy#custom_license_acquisition_url_template}.

---

### MediaStreamingPolicyCommonEncryptionCencEnabledProtocols <a name="MediaStreamingPolicyCommonEncryptionCencEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyCommonEncryptionCencEnabledProtocols: mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyConfig <a name="MediaStreamingPolicyConfig" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyConfig: mediaStreamingPolicy.MediaStreamingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#name MediaStreamingPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCbcs">commonEncryptionCbcs</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | common_encryption_cbcs block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCenc">commonEncryptionCenc</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | common_encryption_cenc block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.defaultContentKeyPolicyName">defaultContentKeyPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.envelopeEncryption">envelopeEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a></code> | envelope_encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#id MediaStreamingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.noEncryptionEnabledProtocols">noEncryptionEnabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | no_encryption_enabled_protocols block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#media_services_account_name MediaStreamingPolicy#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#name MediaStreamingPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#resource_group_name MediaStreamingPolicy#resource_group_name}.

---

##### `commonEncryptionCbcs`<sup>Optional</sup> <a name="commonEncryptionCbcs" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCbcs"></a>

```typescript
public readonly commonEncryptionCbcs: MediaStreamingPolicyCommonEncryptionCbcs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

common_encryption_cbcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#common_encryption_cbcs MediaStreamingPolicy#common_encryption_cbcs}

---

##### `commonEncryptionCenc`<sup>Optional</sup> <a name="commonEncryptionCenc" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.commonEncryptionCenc"></a>

```typescript
public readonly commonEncryptionCenc: MediaStreamingPolicyCommonEncryptionCenc;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

common_encryption_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#common_encryption_cenc MediaStreamingPolicy#common_encryption_cenc}

---

##### `defaultContentKeyPolicyName`<sup>Optional</sup> <a name="defaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.defaultContentKeyPolicyName"></a>

```typescript
public readonly defaultContentKeyPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#default_content_key_policy_name MediaStreamingPolicy#default_content_key_policy_name}.

---

##### `envelopeEncryption`<sup>Optional</sup> <a name="envelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.envelopeEncryption"></a>

```typescript
public readonly envelopeEncryption: MediaStreamingPolicyEnvelopeEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

envelope_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#envelope_encryption MediaStreamingPolicy#envelope_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#id MediaStreamingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noEncryptionEnabledProtocols`<sup>Optional</sup> <a name="noEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.noEncryptionEnabledProtocols"></a>

```typescript
public readonly noEncryptionEnabledProtocols: MediaStreamingPolicyNoEncryptionEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

no_encryption_enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#no_encryption_enabled_protocols MediaStreamingPolicy#no_encryption_enabled_protocols}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaStreamingPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#timeouts MediaStreamingPolicy#timeouts}

---

### MediaStreamingPolicyEnvelopeEncryption <a name="MediaStreamingPolicyEnvelopeEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyEnvelopeEncryption: mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a></code> | default_content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a></code> | enabled_protocols block. |

---

##### `customKeysAcquisitionUrlTemplate`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.customKeysAcquisitionUrlTemplate"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#custom_keys_acquisition_url_template MediaStreamingPolicy#custom_keys_acquisition_url_template}.

---

##### `defaultContentKey`<sup>Optional</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.defaultContentKey"></a>

```typescript
public readonly defaultContentKey: MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

default_content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#default_content_key MediaStreamingPolicy#default_content_key}

---

##### `enabledProtocols`<sup>Optional</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption.property.enabledProtocols"></a>

```typescript
public readonly enabledProtocols: MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

enabled_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#enabled_protocols MediaStreamingPolicy#enabled_protocols}

---

### MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey <a name="MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyEnvelopeEncryptionDefaultContentKey: mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#label MediaStreamingPolicy#label}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#policy_name MediaStreamingPolicy#policy_name}.

---

### MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols <a name="MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyEnvelopeEncryptionEnabledProtocols: mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyNoEncryptionEnabledProtocols <a name="MediaStreamingPolicyNoEncryptionEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyNoEncryptionEnabledProtocols: mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}. |

---

##### `dash`<sup>Optional</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#dash MediaStreamingPolicy#dash}.

---

##### `download`<sup>Optional</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#download MediaStreamingPolicy#download}.

---

##### `hls`<sup>Optional</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#hls MediaStreamingPolicy#hls}.

---

##### `smoothStreaming`<sup>Optional</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#smooth_streaming MediaStreamingPolicy#smooth_streaming}.

---

### MediaStreamingPolicyTimeouts <a name="MediaStreamingPolicyTimeouts" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

const mediaStreamingPolicyTimeouts: mediaStreamingPolicy.MediaStreamingPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#create MediaStreamingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#delete MediaStreamingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#read MediaStreamingPolicy#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#create MediaStreamingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#delete MediaStreamingPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/media_streaming_policy#read MediaStreamingPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput">customKeysAcquisitionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customKeysAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplateInput: string;
```

- *Type:* string

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetAllowPersistentLicense">resetAllowPersistentLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetCustomLicenseAcquisitionUrlTemplate">resetCustomLicenseAcquisitionUrlTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowPersistentLicense` <a name="resetAllowPersistentLicense" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetAllowPersistentLicense"></a>

```typescript
public resetAllowPersistentLicense(): void
```

##### `resetCustomLicenseAcquisitionUrlTemplate` <a name="resetCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.resetCustomLicenseAcquisitionUrlTemplate"></a>

```typescript
public resetCustomLicenseAcquisitionUrlTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicenseInput">allowPersistentLicenseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplateInput">customLicenseAcquisitionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicense">allowPersistentLicense</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPersistentLicenseInput`<sup>Optional</sup> <a name="allowPersistentLicenseInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicenseInput"></a>

```typescript
public readonly allowPersistentLicenseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customLicenseAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplateInput"></a>

```typescript
public readonly customLicenseAcquisitionUrlTemplateInput: string;
```

- *Type:* string

---

##### `allowPersistentLicense`<sup>Required</sup> <a name="allowPersistentLicense" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.allowPersistentLicense"></a>

```typescript
public readonly allowPersistentLicense: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Required</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.customLicenseAcquisitionUrlTemplate"></a>

```typescript
public readonly customLicenseAcquisitionUrlTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDash"></a>

```typescript
public resetDash(): void
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetDownload"></a>

```typescript
public resetDownload(): void
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetHls"></a>

```typescript
public resetHls(): void
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```typescript
public resetSmoothStreaming(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dashInput"></a>

```typescript
public readonly dashInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.downloadInput"></a>

```typescript
public readonly downloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hlsInput"></a>

```typescript
public readonly hlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```typescript
public readonly smoothStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---


### MediaStreamingPolicyCommonEncryptionCbcsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCbcsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putClearKeyEncryption">putClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey">putDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay">putDrmFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols">putEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetClearKeyEncryption">resetClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDefaultContentKey">resetDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDrmFairplay">resetDrmFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetEnabledProtocols">resetEnabledProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClearKeyEncryption` <a name="putClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putClearKeyEncryption"></a>

```typescript
public putClearKeyEncryption(value: MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putClearKeyEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

---

##### `putDefaultContentKey` <a name="putDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey"></a>

```typescript
public putDefaultContentKey(value: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDefaultContentKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---

##### `putDrmFairplay` <a name="putDrmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay"></a>

```typescript
public putDrmFairplay(value: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putDrmFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---

##### `putEnabledProtocols` <a name="putEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols"></a>

```typescript
public putEnabledProtocols(value: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.putEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---

##### `resetClearKeyEncryption` <a name="resetClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetClearKeyEncryption"></a>

```typescript
public resetClearKeyEncryption(): void
```

##### `resetDefaultContentKey` <a name="resetDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDefaultContentKey"></a>

```typescript
public resetDefaultContentKey(): void
```

##### `resetDrmFairplay` <a name="resetDrmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetDrmFairplay"></a>

```typescript
public resetDrmFairplay(): void
```

##### `resetEnabledProtocols` <a name="resetEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.resetEnabledProtocols"></a>

```typescript
public resetEnabledProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplay">drmFairplay</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryptionInput">clearKeyEncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKeyInput">defaultContentKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplayInput">drmFairplayInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocolsInput">enabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clearKeyEncryption`<sup>Required</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryption"></a>

```typescript
public readonly clearKeyEncryption: MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryptionOutputReference</a>

---

##### `defaultContentKey`<sup>Required</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKey"></a>

```typescript
public readonly defaultContentKey: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKeyOutputReference</a>

---

##### `drmFairplay`<sup>Required</sup> <a name="drmFairplay" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplay"></a>

```typescript
public readonly drmFairplay: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplayOutputReference</a>

---

##### `enabledProtocols`<sup>Required</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocols"></a>

```typescript
public readonly enabledProtocols: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocolsOutputReference</a>

---

##### `clearKeyEncryptionInput`<sup>Optional</sup> <a name="clearKeyEncryptionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.clearKeyEncryptionInput"></a>

```typescript
public readonly clearKeyEncryptionInput: MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCbcsClearKeyEncryption</a>

---

##### `defaultContentKeyInput`<sup>Optional</sup> <a name="defaultContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.defaultContentKeyInput"></a>

```typescript
public readonly defaultContentKeyInput: MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey">MediaStreamingPolicyCommonEncryptionCbcsDefaultContentKey</a>

---

##### `drmFairplayInput`<sup>Optional</sup> <a name="drmFairplayInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.drmFairplayInput"></a>

```typescript
public readonly drmFairplayInput: MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay">MediaStreamingPolicyCommonEncryptionCbcsDrmFairplay</a>

---

##### `enabledProtocolsInput`<sup>Optional</sup> <a name="enabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.enabledProtocolsInput"></a>

```typescript
public readonly enabledProtocolsInput: MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols">MediaStreamingPolicyCommonEncryptionCbcsEnabledProtocols</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCbcs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCbcs">MediaStreamingPolicyCommonEncryptionCbcs</a>

---


### MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput">customKeysAcquisitionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customKeysAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplateInput: string;
```

- *Type:* string

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.get"></a>

```typescript
public get(index: number): MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrackCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>[]

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencClearTrackCondition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a> | cdktf.IResolvable

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackList <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.get"></a>

```typescript
public get(index: number): MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>[]

---


### MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.putCondition"></a>

```typescript
public putCondition(value: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrackCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList">MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.condition"></a>

```typescript
public readonly condition: MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList">MediaStreamingPolicyCommonEncryptionCencClearTrackConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrackCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackCondition">MediaStreamingPolicyCommonEncryptionCencClearTrackCondition</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencClearTrack | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a> | cdktf.IResolvable

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.get"></a>

```typescript
public get(index: number): MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>[]

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.putTrack">putTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrack` <a name="putTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.putTrack"></a>

```typescript
public putTrack(value: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.putTrack.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>[]

---

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.track">track</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.trackInput">trackInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `track`<sup>Required</sup> <a name="track" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.track"></a>

```typescript
public readonly track: MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList</a>

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `trackInput`<sup>Optional</sup> <a name="trackInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.trackInput"></a>

```typescript
public readonly trackInput: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a> | cdktf.IResolvable

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.get"></a>

```typescript
public get(index: number): MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>[]

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.propertyInput"></a>

```typescript
public readonly propertyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a> | cdktf.IResolvable

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.get"></a>

```typescript
public get(index: number): MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a>[]

---


### MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.putCondition"></a>

```typescript
public putCondition(value: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.condition"></a>

```typescript
public readonly condition: MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackCondition</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingTrack</a> | cdktf.IResolvable

---


### MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---


### MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomLicenseAcquisitionUrlTemplate">resetCustomLicenseAcquisitionUrlTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetCustomLicenseAcquisitionUrlTemplate` <a name="resetCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.resetCustomLicenseAcquisitionUrlTemplate"></a>

```typescript
public resetCustomLicenseAcquisitionUrlTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributesInput">customAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplateInput">customLicenseAcquisitionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributes">customAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplate">customLicenseAcquisitionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: string;
```

- *Type:* string

---

##### `customLicenseAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customLicenseAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplateInput"></a>

```typescript
public readonly customLicenseAcquisitionUrlTemplateInput: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: string;
```

- *Type:* string

---

##### `customLicenseAcquisitionUrlTemplate`<sup>Required</sup> <a name="customLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.customLicenseAcquisitionUrlTemplate"></a>

```typescript
public readonly customLicenseAcquisitionUrlTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencDrmPlayready;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---


### MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDash"></a>

```typescript
public resetDash(): void
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetDownload"></a>

```typescript
public resetDownload(): void
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetHls"></a>

```typescript
public resetHls(): void
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```typescript
public resetSmoothStreaming(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dashInput"></a>

```typescript
public readonly dashInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.downloadInput"></a>

```typescript
public readonly downloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hlsInput"></a>

```typescript
public readonly hlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```typescript
public readonly smoothStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---


### MediaStreamingPolicyCommonEncryptionCencOutputReference <a name="MediaStreamingPolicyCommonEncryptionCencOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearKeyEncryption">putClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearTrack">putClearTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putContentKeyToTrackMapping">putContentKeyToTrackMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey">putDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready">putDrmPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols">putEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearKeyEncryption">resetClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearTrack">resetClearTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetContentKeyToTrackMapping">resetContentKeyToTrackMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDefaultContentKey">resetDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmPlayready">resetDrmPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmWidevineCustomLicenseAcquisitionUrlTemplate">resetDrmWidevineCustomLicenseAcquisitionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetEnabledProtocols">resetEnabledProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClearKeyEncryption` <a name="putClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearKeyEncryption"></a>

```typescript
public putClearKeyEncryption(value: MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearKeyEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

---

##### `putClearTrack` <a name="putClearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearTrack"></a>

```typescript
public putClearTrack(value: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrack[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putClearTrack.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>[]

---

##### `putContentKeyToTrackMapping` <a name="putContentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putContentKeyToTrackMapping"></a>

```typescript
public putContentKeyToTrackMapping(value: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putContentKeyToTrackMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>[]

---

##### `putDefaultContentKey` <a name="putDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey"></a>

```typescript
public putDefaultContentKey(value: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDefaultContentKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---

##### `putDrmPlayready` <a name="putDrmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready"></a>

```typescript
public putDrmPlayready(value: MediaStreamingPolicyCommonEncryptionCencDrmPlayready): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putDrmPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---

##### `putEnabledProtocols` <a name="putEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols"></a>

```typescript
public putEnabledProtocols(value: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.putEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---

##### `resetClearKeyEncryption` <a name="resetClearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearKeyEncryption"></a>

```typescript
public resetClearKeyEncryption(): void
```

##### `resetClearTrack` <a name="resetClearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetClearTrack"></a>

```typescript
public resetClearTrack(): void
```

##### `resetContentKeyToTrackMapping` <a name="resetContentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetContentKeyToTrackMapping"></a>

```typescript
public resetContentKeyToTrackMapping(): void
```

##### `resetDefaultContentKey` <a name="resetDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDefaultContentKey"></a>

```typescript
public resetDefaultContentKey(): void
```

##### `resetDrmPlayready` <a name="resetDrmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmPlayready"></a>

```typescript
public resetDrmPlayready(): void
```

##### `resetDrmWidevineCustomLicenseAcquisitionUrlTemplate` <a name="resetDrmWidevineCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetDrmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```typescript
public resetDrmWidevineCustomLicenseAcquisitionUrlTemplate(): void
```

##### `resetEnabledProtocols` <a name="resetEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.resetEnabledProtocols"></a>

```typescript
public resetEnabledProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryption">clearKeyEncryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrack">clearTrack</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList">MediaStreamingPolicyCommonEncryptionCencClearTrackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMapping">contentKeyToTrackMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayready">drmPlayready</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference">MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryptionInput">clearKeyEncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrackInput">clearTrackInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMappingInput">contentKeyToTrackMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKeyInput">defaultContentKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayreadyInput">drmPlayreadyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplateInput">drmWidevineCustomLicenseAcquisitionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocolsInput">enabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplate">drmWidevineCustomLicenseAcquisitionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clearKeyEncryption`<sup>Required</sup> <a name="clearKeyEncryption" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryption"></a>

```typescript
public readonly clearKeyEncryption: MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryptionOutputReference</a>

---

##### `clearTrack`<sup>Required</sup> <a name="clearTrack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrack"></a>

```typescript
public readonly clearTrack: MediaStreamingPolicyCommonEncryptionCencClearTrackList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrackList">MediaStreamingPolicyCommonEncryptionCencClearTrackList</a>

---

##### `contentKeyToTrackMapping`<sup>Required</sup> <a name="contentKeyToTrackMapping" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMapping"></a>

```typescript
public readonly contentKeyToTrackMapping: MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMappingList</a>

---

##### `defaultContentKey`<sup>Required</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKey"></a>

```typescript
public readonly defaultContentKey: MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference">MediaStreamingPolicyCommonEncryptionCencDefaultContentKeyOutputReference</a>

---

##### `drmPlayready`<sup>Required</sup> <a name="drmPlayready" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayready"></a>

```typescript
public readonly drmPlayready: MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference">MediaStreamingPolicyCommonEncryptionCencDrmPlayreadyOutputReference</a>

---

##### `enabledProtocols`<sup>Required</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocols"></a>

```typescript
public readonly enabledProtocols: MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference">MediaStreamingPolicyCommonEncryptionCencEnabledProtocolsOutputReference</a>

---

##### `clearKeyEncryptionInput`<sup>Optional</sup> <a name="clearKeyEncryptionInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearKeyEncryptionInput"></a>

```typescript
public readonly clearKeyEncryptionInput: MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption">MediaStreamingPolicyCommonEncryptionCencClearKeyEncryption</a>

---

##### `clearTrackInput`<sup>Optional</sup> <a name="clearTrackInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.clearTrackInput"></a>

```typescript
public readonly clearTrackInput: IResolvable | MediaStreamingPolicyCommonEncryptionCencClearTrack[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencClearTrack">MediaStreamingPolicyCommonEncryptionCencClearTrack</a>[]

---

##### `contentKeyToTrackMappingInput`<sup>Optional</sup> <a name="contentKeyToTrackMappingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.contentKeyToTrackMappingInput"></a>

```typescript
public readonly contentKeyToTrackMappingInput: IResolvable | MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping">MediaStreamingPolicyCommonEncryptionCencContentKeyToTrackMapping</a>[]

---

##### `defaultContentKeyInput`<sup>Optional</sup> <a name="defaultContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.defaultContentKeyInput"></a>

```typescript
public readonly defaultContentKeyInput: MediaStreamingPolicyCommonEncryptionCencDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDefaultContentKey">MediaStreamingPolicyCommonEncryptionCencDefaultContentKey</a>

---

##### `drmPlayreadyInput`<sup>Optional</sup> <a name="drmPlayreadyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmPlayreadyInput"></a>

```typescript
public readonly drmPlayreadyInput: MediaStreamingPolicyCommonEncryptionCencDrmPlayready;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencDrmPlayready">MediaStreamingPolicyCommonEncryptionCencDrmPlayready</a>

---

##### `drmWidevineCustomLicenseAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="drmWidevineCustomLicenseAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplateInput"></a>

```typescript
public readonly drmWidevineCustomLicenseAcquisitionUrlTemplateInput: string;
```

- *Type:* string

---

##### `enabledProtocolsInput`<sup>Optional</sup> <a name="enabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.enabledProtocolsInput"></a>

```typescript
public readonly enabledProtocolsInput: MediaStreamingPolicyCommonEncryptionCencEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencEnabledProtocols">MediaStreamingPolicyCommonEncryptionCencEnabledProtocols</a>

---

##### `drmWidevineCustomLicenseAcquisitionUrlTemplate`<sup>Required</sup> <a name="drmWidevineCustomLicenseAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.drmWidevineCustomLicenseAcquisitionUrlTemplate"></a>

```typescript
public readonly drmWidevineCustomLicenseAcquisitionUrlTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCencOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyCommonEncryptionCenc;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyCommonEncryptionCenc">MediaStreamingPolicyCommonEncryptionCenc</a>

---


### MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference <a name="MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

---


### MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference <a name="MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDash"></a>

```typescript
public resetDash(): void
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetDownload"></a>

```typescript
public resetDownload(): void
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetHls"></a>

```typescript
public resetHls(): void
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```typescript
public resetSmoothStreaming(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dashInput"></a>

```typescript
public readonly dashInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.downloadInput"></a>

```typescript
public readonly downloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hlsInput"></a>

```typescript
public readonly hlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```typescript
public readonly smoothStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

---


### MediaStreamingPolicyEnvelopeEncryptionOutputReference <a name="MediaStreamingPolicyEnvelopeEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putDefaultContentKey">putDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putEnabledProtocols">putEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetCustomKeysAcquisitionUrlTemplate">resetCustomKeysAcquisitionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetDefaultContentKey">resetDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetEnabledProtocols">resetEnabledProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultContentKey` <a name="putDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putDefaultContentKey"></a>

```typescript
public putDefaultContentKey(value: MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putDefaultContentKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

---

##### `putEnabledProtocols` <a name="putEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putEnabledProtocols"></a>

```typescript
public putEnabledProtocols(value: MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.putEnabledProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

---

##### `resetCustomKeysAcquisitionUrlTemplate` <a name="resetCustomKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetCustomKeysAcquisitionUrlTemplate"></a>

```typescript
public resetCustomKeysAcquisitionUrlTemplate(): void
```

##### `resetDefaultContentKey` <a name="resetDefaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetDefaultContentKey"></a>

```typescript
public resetDefaultContentKey(): void
```

##### `resetEnabledProtocols` <a name="resetEnabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.resetEnabledProtocols"></a>

```typescript
public resetEnabledProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKey">defaultContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocols">enabledProtocols</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput">customKeysAcquisitionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKeyInput">defaultContentKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocolsInput">enabledProtocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate">customKeysAcquisitionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultContentKey`<sup>Required</sup> <a name="defaultContentKey" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKey"></a>

```typescript
public readonly defaultContentKey: MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKeyOutputReference</a>

---

##### `enabledProtocols`<sup>Required</sup> <a name="enabledProtocols" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocols"></a>

```typescript
public readonly enabledProtocols: MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocolsOutputReference</a>

---

##### `customKeysAcquisitionUrlTemplateInput`<sup>Optional</sup> <a name="customKeysAcquisitionUrlTemplateInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplateInput"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplateInput: string;
```

- *Type:* string

---

##### `defaultContentKeyInput`<sup>Optional</sup> <a name="defaultContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.defaultContentKeyInput"></a>

```typescript
public readonly defaultContentKeyInput: MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey">MediaStreamingPolicyEnvelopeEncryptionDefaultContentKey</a>

---

##### `enabledProtocolsInput`<sup>Optional</sup> <a name="enabledProtocolsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.enabledProtocolsInput"></a>

```typescript
public readonly enabledProtocolsInput: MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols">MediaStreamingPolicyEnvelopeEncryptionEnabledProtocols</a>

---

##### `customKeysAcquisitionUrlTemplate`<sup>Required</sup> <a name="customKeysAcquisitionUrlTemplate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.customKeysAcquisitionUrlTemplate"></a>

```typescript
public readonly customKeysAcquisitionUrlTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyEnvelopeEncryption;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyEnvelopeEncryption">MediaStreamingPolicyEnvelopeEncryption</a>

---


### MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference <a name="MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDash">resetDash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDownload">resetDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetHls">resetHls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming">resetSmoothStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDash` <a name="resetDash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDash"></a>

```typescript
public resetDash(): void
```

##### `resetDownload` <a name="resetDownload" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetDownload"></a>

```typescript
public resetDownload(): void
```

##### `resetHls` <a name="resetHls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetHls"></a>

```typescript
public resetHls(): void
```

##### `resetSmoothStreaming` <a name="resetSmoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.resetSmoothStreaming"></a>

```typescript
public resetSmoothStreaming(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dashInput">dashInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.downloadInput">downloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hlsInput">hlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput">smoothStreamingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dash">dash</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.download">download</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hls">hls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreaming">smoothStreaming</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashInput`<sup>Optional</sup> <a name="dashInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dashInput"></a>

```typescript
public readonly dashInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `downloadInput`<sup>Optional</sup> <a name="downloadInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.downloadInput"></a>

```typescript
public readonly downloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hlsInput`<sup>Optional</sup> <a name="hlsInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hlsInput"></a>

```typescript
public readonly hlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreamingInput`<sup>Optional</sup> <a name="smoothStreamingInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreamingInput"></a>

```typescript
public readonly smoothStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.dash"></a>

```typescript
public readonly dash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `download`<sup>Required</sup> <a name="download" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.download"></a>

```typescript
public readonly download: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.hls"></a>

```typescript
public readonly hls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smoothStreaming`<sup>Required</sup> <a name="smoothStreaming" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.smoothStreaming"></a>

```typescript
public readonly smoothStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyNoEncryptionEnabledProtocols;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyNoEncryptionEnabledProtocols">MediaStreamingPolicyNoEncryptionEnabledProtocols</a>

---


### MediaStreamingPolicyTimeoutsOutputReference <a name="MediaStreamingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaStreamingPolicy } from '@cdktf/provider-azurerm'

new mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaStreamingPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingPolicy.MediaStreamingPolicyTimeouts">MediaStreamingPolicyTimeouts</a> | cdktf.IResolvable

---



