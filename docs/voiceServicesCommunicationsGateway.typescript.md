# `azurerm_voice_services_communications_gateway`

Refer to the Terraform Registory for docs: [`azurerm_voice_services_communications_gateway`](https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway).

# `voiceServicesCommunicationsGateway` Submodule <a name="`voiceServicesCommunicationsGateway` Submodule" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VoiceServicesCommunicationsGateway <a name="VoiceServicesCommunicationsGateway" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway azurerm_voice_services_communications_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

new voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway(scope: Construct, id: string, config: VoiceServicesCommunicationsGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig">VoiceServicesCommunicationsGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig">VoiceServicesCommunicationsGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putServiceLocation">putServiceLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetApiBridge">resetApiBridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetAutoGeneratedDomainNameLabelScope">resetAutoGeneratedDomainNameLabelScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetEmergencyDialStrings">resetEmergencyDialStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetMicrosoftTeamsVoicemailPilotNumber">resetMicrosoftTeamsVoicemailPilotNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOnPremMcpEnabled">resetOnPremMcpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putServiceLocation` <a name="putServiceLocation" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putServiceLocation"></a>

```typescript
public putServiceLocation(value: IResolvable | VoiceServicesCommunicationsGatewayServiceLocation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putServiceLocation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: VoiceServicesCommunicationsGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>

---

##### `resetApiBridge` <a name="resetApiBridge" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetApiBridge"></a>

```typescript
public resetApiBridge(): void
```

##### `resetAutoGeneratedDomainNameLabelScope` <a name="resetAutoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetAutoGeneratedDomainNameLabelScope"></a>

```typescript
public resetAutoGeneratedDomainNameLabelScope(): void
```

##### `resetEmergencyDialStrings` <a name="resetEmergencyDialStrings" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetEmergencyDialStrings"></a>

```typescript
public resetEmergencyDialStrings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMicrosoftTeamsVoicemailPilotNumber` <a name="resetMicrosoftTeamsVoicemailPilotNumber" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetMicrosoftTeamsVoicemailPilotNumber"></a>

```typescript
public resetMicrosoftTeamsVoicemailPilotNumber(): void
```

##### `resetOnPremMcpEnabled` <a name="resetOnPremMcpEnabled" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetOnPremMcpEnabled"></a>

```typescript
public resetOnPremMcpEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isConstruct"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformElement"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformResource"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocation">serviceLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList">VoiceServicesCommunicationsGatewayServiceLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridgeInput">apiBridgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScopeInput">autoGeneratedDomainNameLabelScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecsInput">codecsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivityInput">connectivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911TypeInput">e911TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStringsInput">emergencyDialStringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumberInput">microsoftTeamsVoicemailPilotNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabledInput">onPremMcpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platformsInput">platformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocationInput">serviceLocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridge">apiBridge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScope">autoGeneratedDomainNameLabelScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecs">codecs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivity">connectivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911Type">e911Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStrings">emergencyDialStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumber">microsoftTeamsVoicemailPilotNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabled">onPremMcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platforms">platforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceLocation`<sup>Required</sup> <a name="serviceLocation" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocation"></a>

```typescript
public readonly serviceLocation: VoiceServicesCommunicationsGatewayServiceLocationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList">VoiceServicesCommunicationsGatewayServiceLocationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeouts"></a>

```typescript
public readonly timeouts: VoiceServicesCommunicationsGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTimeoutsOutputReference</a>

---

##### `apiBridgeInput`<sup>Optional</sup> <a name="apiBridgeInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridgeInput"></a>

```typescript
public readonly apiBridgeInput: string;
```

- *Type:* string

---

##### `autoGeneratedDomainNameLabelScopeInput`<sup>Optional</sup> <a name="autoGeneratedDomainNameLabelScopeInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScopeInput"></a>

```typescript
public readonly autoGeneratedDomainNameLabelScopeInput: string;
```

- *Type:* string

---

##### `codecsInput`<sup>Optional</sup> <a name="codecsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecsInput"></a>

```typescript
public readonly codecsInput: string;
```

- *Type:* string

---

##### `connectivityInput`<sup>Optional</sup> <a name="connectivityInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivityInput"></a>

```typescript
public readonly connectivityInput: string;
```

- *Type:* string

---

##### `e911TypeInput`<sup>Optional</sup> <a name="e911TypeInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911TypeInput"></a>

```typescript
public readonly e911TypeInput: string;
```

- *Type:* string

---

##### `emergencyDialStringsInput`<sup>Optional</sup> <a name="emergencyDialStringsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStringsInput"></a>

```typescript
public readonly emergencyDialStringsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `microsoftTeamsVoicemailPilotNumberInput`<sup>Optional</sup> <a name="microsoftTeamsVoicemailPilotNumberInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumberInput"></a>

```typescript
public readonly microsoftTeamsVoicemailPilotNumberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onPremMcpEnabledInput`<sup>Optional</sup> <a name="onPremMcpEnabledInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabledInput"></a>

```typescript
public readonly onPremMcpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platformsInput`<sup>Optional</sup> <a name="platformsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platformsInput"></a>

```typescript
public readonly platformsInput: string[];
```

- *Type:* string[]

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceLocationInput`<sup>Optional</sup> <a name="serviceLocationInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.serviceLocationInput"></a>

```typescript
public readonly serviceLocationInput: IResolvable | VoiceServicesCommunicationsGatewayServiceLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VoiceServicesCommunicationsGatewayTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a> | cdktf.IResolvable

---

##### `apiBridge`<sup>Required</sup> <a name="apiBridge" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.apiBridge"></a>

```typescript
public readonly apiBridge: string;
```

- *Type:* string

---

##### `autoGeneratedDomainNameLabelScope`<sup>Required</sup> <a name="autoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.autoGeneratedDomainNameLabelScope"></a>

```typescript
public readonly autoGeneratedDomainNameLabelScope: string;
```

- *Type:* string

---

##### `codecs`<sup>Required</sup> <a name="codecs" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.codecs"></a>

```typescript
public readonly codecs: string;
```

- *Type:* string

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.connectivity"></a>

```typescript
public readonly connectivity: string;
```

- *Type:* string

---

##### `e911Type`<sup>Required</sup> <a name="e911Type" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.e911Type"></a>

```typescript
public readonly e911Type: string;
```

- *Type:* string

---

##### `emergencyDialStrings`<sup>Required</sup> <a name="emergencyDialStrings" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.emergencyDialStrings"></a>

```typescript
public readonly emergencyDialStrings: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `microsoftTeamsVoicemailPilotNumber`<sup>Required</sup> <a name="microsoftTeamsVoicemailPilotNumber" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.microsoftTeamsVoicemailPilotNumber"></a>

```typescript
public readonly microsoftTeamsVoicemailPilotNumber: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onPremMcpEnabled`<sup>Required</sup> <a name="onPremMcpEnabled" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.onPremMcpEnabled"></a>

```typescript
public readonly onPremMcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.platforms"></a>

```typescript
public readonly platforms: string[];
```

- *Type:* string[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VoiceServicesCommunicationsGatewayConfig <a name="VoiceServicesCommunicationsGatewayConfig" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

const voiceServicesCommunicationsGatewayConfig: voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.codecs">codecs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#codecs VoiceServicesCommunicationsGateway#codecs}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connectivity">connectivity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#connectivity VoiceServicesCommunicationsGateway#connectivity}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.e911Type">e911Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#e911_type VoiceServicesCommunicationsGateway#e911_type}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#name VoiceServicesCommunicationsGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.platforms">platforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#platforms VoiceServicesCommunicationsGateway#platforms}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#resource_group_name VoiceServicesCommunicationsGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.serviceLocation">serviceLocation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>[]</code> | service_location block. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.apiBridge">apiBridge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#api_bridge VoiceServicesCommunicationsGateway#api_bridge}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.autoGeneratedDomainNameLabelScope">autoGeneratedDomainNameLabelScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#auto_generated_domain_name_label_scope VoiceServicesCommunicationsGateway#auto_generated_domain_name_label_scope}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.emergencyDialStrings">emergencyDialStrings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#emergency_dial_strings VoiceServicesCommunicationsGateway#emergency_dial_strings}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#id VoiceServicesCommunicationsGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.microsoftTeamsVoicemailPilotNumber">microsoftTeamsVoicemailPilotNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#microsoft_teams_voicemail_pilot_number VoiceServicesCommunicationsGateway#microsoft_teams_voicemail_pilot_number}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.onPremMcpEnabled">onPremMcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#on_prem_mcp_enabled VoiceServicesCommunicationsGateway#on_prem_mcp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#tags VoiceServicesCommunicationsGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `codecs`<sup>Required</sup> <a name="codecs" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.codecs"></a>

```typescript
public readonly codecs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#codecs VoiceServicesCommunicationsGateway#codecs}.

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.connectivity"></a>

```typescript
public readonly connectivity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#connectivity VoiceServicesCommunicationsGateway#connectivity}.

---

##### `e911Type`<sup>Required</sup> <a name="e911Type" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.e911Type"></a>

```typescript
public readonly e911Type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#e911_type VoiceServicesCommunicationsGateway#e911_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#name VoiceServicesCommunicationsGateway#name}.

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.platforms"></a>

```typescript
public readonly platforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#platforms VoiceServicesCommunicationsGateway#platforms}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#resource_group_name VoiceServicesCommunicationsGateway#resource_group_name}.

---

##### `serviceLocation`<sup>Required</sup> <a name="serviceLocation" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.serviceLocation"></a>

```typescript
public readonly serviceLocation: IResolvable | VoiceServicesCommunicationsGatewayServiceLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>[]

service_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#service_location VoiceServicesCommunicationsGateway#service_location}

---

##### `apiBridge`<sup>Optional</sup> <a name="apiBridge" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.apiBridge"></a>

```typescript
public readonly apiBridge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#api_bridge VoiceServicesCommunicationsGateway#api_bridge}.

---

##### `autoGeneratedDomainNameLabelScope`<sup>Optional</sup> <a name="autoGeneratedDomainNameLabelScope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.autoGeneratedDomainNameLabelScope"></a>

```typescript
public readonly autoGeneratedDomainNameLabelScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#auto_generated_domain_name_label_scope VoiceServicesCommunicationsGateway#auto_generated_domain_name_label_scope}.

---

##### `emergencyDialStrings`<sup>Optional</sup> <a name="emergencyDialStrings" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.emergencyDialStrings"></a>

```typescript
public readonly emergencyDialStrings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#emergency_dial_strings VoiceServicesCommunicationsGateway#emergency_dial_strings}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#id VoiceServicesCommunicationsGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `microsoftTeamsVoicemailPilotNumber`<sup>Optional</sup> <a name="microsoftTeamsVoicemailPilotNumber" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.microsoftTeamsVoicemailPilotNumber"></a>

```typescript
public readonly microsoftTeamsVoicemailPilotNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#microsoft_teams_voicemail_pilot_number VoiceServicesCommunicationsGateway#microsoft_teams_voicemail_pilot_number}.

---

##### `onPremMcpEnabled`<sup>Optional</sup> <a name="onPremMcpEnabled" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.onPremMcpEnabled"></a>

```typescript
public readonly onPremMcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#on_prem_mcp_enabled VoiceServicesCommunicationsGateway#on_prem_mcp_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#tags VoiceServicesCommunicationsGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VoiceServicesCommunicationsGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#timeouts VoiceServicesCommunicationsGateway#timeouts}

---

### VoiceServicesCommunicationsGatewayServiceLocation <a name="VoiceServicesCommunicationsGatewayServiceLocation" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

const voiceServicesCommunicationsGatewayServiceLocation: voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.operatorAddresses">operatorAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#operator_addresses VoiceServicesCommunicationsGateway#operator_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedMediaSourceAddressPrefixes">allowedMediaSourceAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#allowed_media_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_media_source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedSignalingSourceAddressPrefixes">allowedSignalingSourceAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#allowed_signaling_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_signaling_source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.esrpAddresses">esrpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#esrp_addresses VoiceServicesCommunicationsGateway#esrp_addresses}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#location VoiceServicesCommunicationsGateway#location}.

---

##### `operatorAddresses`<sup>Required</sup> <a name="operatorAddresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.operatorAddresses"></a>

```typescript
public readonly operatorAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#operator_addresses VoiceServicesCommunicationsGateway#operator_addresses}.

---

##### `allowedMediaSourceAddressPrefixes`<sup>Optional</sup> <a name="allowedMediaSourceAddressPrefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedMediaSourceAddressPrefixes"></a>

```typescript
public readonly allowedMediaSourceAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#allowed_media_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_media_source_address_prefixes}.

---

##### `allowedSignalingSourceAddressPrefixes`<sup>Optional</sup> <a name="allowedSignalingSourceAddressPrefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.allowedSignalingSourceAddressPrefixes"></a>

```typescript
public readonly allowedSignalingSourceAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#allowed_signaling_source_address_prefixes VoiceServicesCommunicationsGateway#allowed_signaling_source_address_prefixes}.

---

##### `esrpAddresses`<sup>Optional</sup> <a name="esrpAddresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation.property.esrpAddresses"></a>

```typescript
public readonly esrpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#esrp_addresses VoiceServicesCommunicationsGateway#esrp_addresses}.

---

### VoiceServicesCommunicationsGatewayTimeouts <a name="VoiceServicesCommunicationsGatewayTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

const voiceServicesCommunicationsGatewayTimeouts: voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#create VoiceServicesCommunicationsGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#delete VoiceServicesCommunicationsGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#read VoiceServicesCommunicationsGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#update VoiceServicesCommunicationsGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#create VoiceServicesCommunicationsGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#delete VoiceServicesCommunicationsGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#read VoiceServicesCommunicationsGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/voice_services_communications_gateway#update VoiceServicesCommunicationsGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VoiceServicesCommunicationsGatewayServiceLocationList <a name="VoiceServicesCommunicationsGatewayServiceLocationList" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

new voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.get"></a>

```typescript
public get(index: number): VoiceServicesCommunicationsGatewayServiceLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VoiceServicesCommunicationsGatewayServiceLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a>[]

---


### VoiceServicesCommunicationsGatewayServiceLocationOutputReference <a name="VoiceServicesCommunicationsGatewayServiceLocationOutputReference" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

new voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedMediaSourceAddressPrefixes">resetAllowedMediaSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedSignalingSourceAddressPrefixes">resetAllowedSignalingSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetEsrpAddresses">resetEsrpAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedMediaSourceAddressPrefixes` <a name="resetAllowedMediaSourceAddressPrefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedMediaSourceAddressPrefixes"></a>

```typescript
public resetAllowedMediaSourceAddressPrefixes(): void
```

##### `resetAllowedSignalingSourceAddressPrefixes` <a name="resetAllowedSignalingSourceAddressPrefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetAllowedSignalingSourceAddressPrefixes"></a>

```typescript
public resetAllowedSignalingSourceAddressPrefixes(): void
```

##### `resetEsrpAddresses` <a name="resetEsrpAddresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.resetEsrpAddresses"></a>

```typescript
public resetEsrpAddresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixesInput">allowedMediaSourceAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixesInput">allowedSignalingSourceAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddressesInput">esrpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddressesInput">operatorAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixes">allowedMediaSourceAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixes">allowedSignalingSourceAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddresses">esrpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddresses">operatorAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMediaSourceAddressPrefixesInput`<sup>Optional</sup> <a name="allowedMediaSourceAddressPrefixesInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixesInput"></a>

```typescript
public readonly allowedMediaSourceAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `allowedSignalingSourceAddressPrefixesInput`<sup>Optional</sup> <a name="allowedSignalingSourceAddressPrefixesInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixesInput"></a>

```typescript
public readonly allowedSignalingSourceAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `esrpAddressesInput`<sup>Optional</sup> <a name="esrpAddressesInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddressesInput"></a>

```typescript
public readonly esrpAddressesInput: string[];
```

- *Type:* string[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `operatorAddressesInput`<sup>Optional</sup> <a name="operatorAddressesInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddressesInput"></a>

```typescript
public readonly operatorAddressesInput: string[];
```

- *Type:* string[]

---

##### `allowedMediaSourceAddressPrefixes`<sup>Required</sup> <a name="allowedMediaSourceAddressPrefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedMediaSourceAddressPrefixes"></a>

```typescript
public readonly allowedMediaSourceAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `allowedSignalingSourceAddressPrefixes`<sup>Required</sup> <a name="allowedSignalingSourceAddressPrefixes" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.allowedSignalingSourceAddressPrefixes"></a>

```typescript
public readonly allowedSignalingSourceAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `esrpAddresses`<sup>Required</sup> <a name="esrpAddresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.esrpAddresses"></a>

```typescript
public readonly esrpAddresses: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `operatorAddresses`<sup>Required</sup> <a name="operatorAddresses" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.operatorAddresses"></a>

```typescript
public readonly operatorAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VoiceServicesCommunicationsGatewayServiceLocation | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayServiceLocation">VoiceServicesCommunicationsGatewayServiceLocation</a> | cdktf.IResolvable

---


### VoiceServicesCommunicationsGatewayTimeoutsOutputReference <a name="VoiceServicesCommunicationsGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGateway } from '@cdktf/provider-azurerm'

new voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VoiceServicesCommunicationsGatewayTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGateway.VoiceServicesCommunicationsGatewayTimeouts">VoiceServicesCommunicationsGatewayTimeouts</a> | cdktf.IResolvable

---



